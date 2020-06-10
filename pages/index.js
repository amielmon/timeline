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
      <div className={styles.timeline}>
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
        <EventNode source='1265427168286453760' mediaType='TWEET-VID' title='The Start' description={'The protests begin following the killing of George Floyd in Minneapolis'} date={'May 26, 2020'}/>
        <EventNode source='https://www.instagram.com/p/CBOqUMqj82o/?igshid=75bs2m6apos8' mediaType='INSTAGRAM' title='San Jose' description={'Thousands of peaceful protestors gather in San Jose'} date={'June 2, 2020'} />
      </div>
    </body>
  )
}
