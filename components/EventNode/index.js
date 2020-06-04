import React from 'react'
import styles from './style.module.css'
import ReactMarkdown from 'react-markdown/with-html'

function EventNode({markdown, text}) {
  return (
  <div className={styles.container}>
    <ReactMarkdown className={styles.eventBody} escapeHtml={false} source={markdown}/>
    <span className={styles.date}>{text}</span>
  </div>
  )
}

export default EventNode