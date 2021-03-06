import React from 'react'
import { useInView } from 'react-intersection-observer'
import moment from 'moment'
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';
import styles from './style.module.css'


function EventNode({source, mediaType, title, description, date}) {

  const [ref, inView] = useInView({threshold: 0.5 })

  // Deciphers which component to use based on the type
  let media;
  switch(mediaType) {
    case 'TWEET':
      media = (<TwitterTweetEmbed tweetId={source} options={styles.media} />)
      break;
    case 'TWEET-VID':
      media = (<TwitterVideoEmbed id={source} />)
      break; 
    case 'INSTAGRAM':
      media = (<InstagramEmbed url={source} hideCaption={true} />)
  }

  // If there is a date, render it with the title
  const dateValue = date && new Date(date)
  const dateCopy = moment(dateValue).utc().format('MMMM Do')

  return (
  <div className={styles.container}>
    <div className={styles.descriptionContainer}>
      <div className={inView ? styles.descriptionFrame : styles.descriptionFrameOut}>
        <div className={styles.date}>{dateCopy + ': '}</div>
        <div className={styles.title}>{title}</div>
        <br/>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
    <div className={styles.timeline}>
      <div className={styles.line} ref={ref} >
        <div className={styles.node}/>
      </div>
   </div>
   <div className={styles.mediaContainer}>
    <div className={inView ? styles.mediaFrame : styles.mediaFrameOut}>
      {media}
    </div>
    </div>
  </div>
  )
}

export default EventNode
