import React from 'react'

import EventNode from '../EventNode'
import styles from './style.module.css'

export default function Timeline({data}) {

  const events = data.map((e) => <EventNode source={e.src} mediaType={e.mediaType} title={e.title} description={e.description} date={e.date} />)

  return (
    <div className={styles.mainContainer}>
      {events}
    </div>
  )

}