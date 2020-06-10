import React from 'react';

import EventNode from '../components/EventNode'
import Header from '../components/Header'
import styles from '../styles/index.module.css'

export default function Home() {
  const aboutTitle = `George Floyd Protests\n`
  const text = `We can no longer trust the media to tell the people’s story. So we created a timeline to highlight the different stories people have shared during the Black Lives Matter protests following George Floyd’s death, so that our history is not rewritten or forgotten.`
  
  return (
    <body className={styles.page}>
      <Header />
      <div className={styles.about}>
        <div className={styles.bg}>
          <span className={styles.text} >
            <EventNode title={aboutTitle} description={text} />
          </span>
        </div>
      </div>
      <EventNode source='1265427168286453760' type='TWEET-VID' title='The Start' date={'May 26, 2020'}/>
    </body>
  )
}
