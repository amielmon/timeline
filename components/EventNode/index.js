import React, { useState } from 'react'

import InstagramEmbed from 'react-instagram-embed';
import styles from './style.module.css'
import { TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';

function EventNode({source, mediaType, title, description, date}) {

  const [showEvent, setShowEvent] = useState(false)

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
  const titleText = date ? date + ': ' + title : title;

  return (
  <div className={styles.container}>
    {showEvent &&
    <div className={styles.descriptionContainer}>
      <div className={styles.title}>{titleText}</div>
      <div className={styles.description}>{description}</div>
    </div>}
    <div className={styles.timeline}>
      <div className={styles.line}>
        <div className={styles.node}  onClick={() => setShowEvent(!showEvent)} />
      </div>
   </div>
   {showEvent &&
    <div className={styles.media}>
      {media}
    </div>
   }
  </div>
  )
}

export default EventNode
