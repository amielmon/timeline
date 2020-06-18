import React from 'react';

import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import styles from '../styles/index.module.css'
import Resources from '../components/Resources'
import Timeline from '../components/Timeline'
import Contribute from '../components/Contribute'
import { useInView } from 'react-intersection-observer'

const about = `Social media has played a huge role in informing each other, organizing our communties, 
               creating social awareness, and bringing justice. We hope to keep the stories shared from the protests 
               following the murder of George Floyd relevant through our dynamic timeline, and make collections of 
               informative posts accessible in our growing resources grid. Contributions to our collection can be made
               down below.`
const warning = ` Contains graphic content, such as violence and blood.`;

export default function Home({resEvents, resResources}) {
  resEvents.sort((a,b) => new Date(a.date) - new Date(b.date))

  const [ref, inView] = useInView({threshold: 0.5})

  return (
    <body id='page' className={styles.page}>
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
      <div id='contribute' >
        <Contribute />
      </div>
    </body>
  )
}

Home.getInitialProps = async () => {
  const [resEvents, resResources] = await Promise.all([
    fetch('http://localhost:3000/api/events').then(r => r.json()),
    fetch('http://localhost:3000/api/resources').then(r => r.json())
  ]);

  return { resEvents, resResources };
}