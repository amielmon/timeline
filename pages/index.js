import React from 'react';

import EventNode from '../components/EventNode'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import styles from '../styles/index.module.css'
import Timeline from '../components/Timeline'

export default function Home({data}) {
  const aboutTitle = `George Floyd Protests\n`
  const text = `We can no longer trust the media to tell the people’s story. So we created a timeline to highlight the different stories people have shared during the Black Lives Matter protests following George Floyd’s death, so that our history is not rewritten or forgotten.`
  
  return (
    <body className={styles.page}>
      <Header />
      <div className={styles.about}>
        <div className={styles.bg}>
          <span className={styles.text} >
          </span>
        </div>
      </div>
      <Timeline data={data} />
    </body>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/events')
  const json = await res.json()
  return { data: json }
}