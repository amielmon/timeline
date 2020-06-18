import React from 'react'

import Email from '../Icons/Email'
import Github from '../Icons/Github'
import LinkedIn from '../Icons/LinkedIn'
import styles from './style.module.css'

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.poopee}>
        <span className={styles.name}>Angela Gomba</span>
        <div className={styles.info}>
          <span className={styles.content}>
            <Github className={styles.github}/>
            <LinkedIn className={styles.linkedIn}/>
            <Email />
          </span>
          <span className={styles.content}>
            <a className={styles.text} href='https://github.com/angelagomba'>Github</a>
            <a className={styles.text} href='https://www.linkedin.com/in/angela-gomba/'>LinkedIn</a>
            <span className={styles.text}>angelamariegomba@gmail.com</span>
          </span>
        </div>
      </div>
      <div className={styles.poopee}>
        <span className={styles.name}>Amiel Monasterial</span>
        <div className={styles.info}>
          <span className={styles.content}>
            <Github className={styles.github}/>
            <LinkedIn className={styles.linkedIn}/>
            <Email />
          </span>
          <span className={styles.content}>
            <a className={styles.text} href='https://github.com/amielmon'>Github</a>
            <a className={styles.text} href='https://www.linkedin.com/in/amielmon'>LinkedIn</a>
            <span className={styles.text}>amielmon@gmail.com</span>
          </span>
        </div>
      </div>
    </div>

  )
}