import React, { useEffect, useState } from 'react';

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
            <EventNode text={aboutTitle + text} />
          </span>
        </div>
      </div>
      <EventNode text='every' />
      <EventNode text='second'/>
      <EventNode text='counts'/>
      <EventNode text='i'/>
      <EventNode text='dont'/>
      <EventNode text='wanna'/>
      <EventNode text='talk'/>
      <EventNode text='to'/>
      <EventNode text='you'/>
      <EventNode text='anymore'/>
      <EventNode text='yeah'/>
      <p>pee</p>
    </body>
  )
}
