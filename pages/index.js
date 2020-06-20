import React from 'react';

import fetch from 'isomorphic-unfetch'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/index.module.css'
import Resources from '../components/Resources'
import Timeline from '../components/Timeline'
import Contribute from '../components/Contribute'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'

const about = `Social media has played a huge role in informing each other, organizing our communities, 
               creating social awareness, and bringing justice. We hope to keep the stories shared from the protests 
               following the murder of George Floyd relevant through our dynamic timeline, and make collections of 
               informative posts accessible in our growing resources grid. Contributions to our collection can be made
               down below.`
const warning = ` Contains graphic content, such as violence and blood.`;

export default function Home({resEvents, resResources}) {
  resEvents.sort((a,b) => new Date(a.date) - new Date(b.date))

  const [ref, inView] = useInView({threshold: 0.5})
  
  console.log('ga', process.env.GA_TRACKING_ID)

  return (
    <body id='page' className={styles.page}>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
          `,
          }}
        />
        <title>Timeline of a Revolution</title>
        <meta name="viewport" content="initial-scale=0.5, width=device-width" />
      </Head>      
      <Header />
      <div className={inView ? styles.about : styles.aboutOut} ref={ref}>
        <span className={styles.text}>BLACK LIVES MATTER.</span>
        <span className={styles.aboutText}>{about}</span>
        <span className={styles.warningText}>
          Warning:
          <span>{warning}</span>
        </span>
      </div>
      <div id='timeline' className={styles.anchor}>
        <Timeline data={resEvents} />
      </div>
      <div id='resources' className={styles.anchor}>
        <Resources data={resResources} />
      </div>
      <div id='contribute'>
        <Contribute />
      </div>
      <Footer />
    </body>
  )
}

Home.getInitialProps = async () => {
  const [resEvents, resResources] = await Promise.all([
    fetch('https://blmtimeline.com/api/events').then(r => r.json()),
    fetch('https://blmtimeline.com/api/resources').then(r => r.json())
  ]);

  return { resEvents, resResources };
}