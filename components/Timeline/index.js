import React from 'react'

import EventNode from '../EventNode'
import fetch from 'isomorphic-unfetch'
import styles from './style.module.css'

export default function Timeline({data}) {

  const events = data.map((e) => <EventNode source={e.src} mediaType={e.mediaType} title={e.title} description={e.description} date={e.date} />)

  return (
    <div className={styles.mainContainer}>
      {events}
    </div>
  )

}

Timeline.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/events')
  const json = await res.json()
  return { data: json }
}