import React, { useState } from 'react'

import InstagramEmbed from 'react-instagram-embed';
import styles from './style.module.css'
import { TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';

function EventNode({source, mediaType, title, description, date}) {

  const [isHovering, showContents] = useState(false)

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
  <div className={styles.eventContainer} onMouseEnter={() => showContents(true)} onMouseLeave={() => showContents(false)}>
    <div className={styles.title}>{titleText}</div>
    <div className={styles.description}>{description}</div>
    {isHovering && 
      <div className={styles.mediaContainer}>
        {media}
      </div> 
    }
  </div>
  )
}

export default EventNode
