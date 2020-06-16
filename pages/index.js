import React from 'react';

import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import styles from '../styles/index.module.css'
import Resources from '../components/Resources'
import Timeline from '../components/Timeline'
import Contribute from '../components/Contribute'

export default function Home({resEvents, resResources}) {
  const aboutTitle = `George Floyd Protests\n`
  const text = `We can no longer trust the media to tell the people’s story. So we created a timeline to highlight the different stories people have shared during the Black Lives Matter protests following George Floyd’s death, so that our history is not rewritten or forgotten.`
  
  resEvents.sort((a,b) => new Date(a.date) - new Date(b.date))

  return (
    <body id='page' className={styles.page}>
      <Header />
      <div className={styles.about}>
        <div className={styles.bg}>
          <span className={styles.text} />
        </div>
      </div>
      <div id='timeline' className={styles.timeline}>
        <Timeline data={resEvents} />
      </div>
      <div id='resources'>
        <Resources data={resResources} />
      </div>
      <div id='contribute'>
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