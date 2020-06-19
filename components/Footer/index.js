import React from 'react'

import Email from '../Icons/Email'
import Github from '../Icons/Github'
import LinkedIn from '../Icons/LinkedIn'
import styles from './style.module.css'

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.message}>Made with love by Angela Gomba and Amiel Monasterial</span>
      <span className={styles.info}>
        <span className={styles.contact}>Contact</span>
        <span className={styles.text}>
          angelamariegomba@gmail.com
          <a href='https://github.com/angelagomba'>
            <Github className={styles.github}/>
          </a>
          <a href='https://www.linkedin.com/in/angela-gomba/'>
            <LinkedIn className={styles.linkedIn}/>
          </a>
        </span>
        <span className={styles.text}>
          amielmon@gmail.com
          <a href='https://github.com/amielmon'>
            <Github className={styles.github}/>
          </a>
          <a href='https://www.linkedin.com/in/amielmon/'>
            <LinkedIn className={styles.linkedIn}/>
          </a>
        </span>
      </span>
    </div>
  )
}