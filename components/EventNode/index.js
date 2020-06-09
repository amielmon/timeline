import React from 'react'
import styles from './style.module.css'

function EventNode({text, embed}) {
  return (
  <div className={styles.container}>
    <span className={styles.date}>{text}</span>
    <span>{embed}</span>
  </div>
  )
}

export default EventNode