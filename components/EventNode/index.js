import React from 'react'
import styles from './style.module.css'
import { TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';

function EventNode({source, type, title, description, date}) {

  // Deciphers which component to use based on the type
  let media;
  if (type === 'TWEET') {
    media = (<TwitterTweetEmbed tweetId={source} options={styles.media}/>);
  } else if (type === 'TWEET-VID') {
    media = (<TwitterVideoEmbed id={source} />);
  }

  // If there is a date, render it with the title
  const titleText = date ? date + ': ' + title : title;

  return (
  <div className={styles.eventContainer}>
    <div className={styles.title}>{titleText}</div>
    <div className={styles.description}>{description}</div>
    <div className={styles.mediaContainer}>
      {media}
    </div>
  </div>
  )
}

export default EventNode