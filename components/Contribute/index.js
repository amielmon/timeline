import React, {useState} from 'react'
import styles from './style.module.css'
import User from '../Icons/User'
import Email from '../Icons/Email'
import Timeline from '../Icons/Timeline'
import Resource from '../Icons/Resource'

function Contribute() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contribute</div>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <div className={styles.formTitle}>Submit events or resources</div>
            <div className={styles.inputWrapper}>
                <User fill={'#9d96a8'}/>
                <input placeholder='Enter name (optional)'/>
              </div>
              <div className={styles.inputWrapper}>
                <Email fill={'#9d96a8'}/>
                <input placeholder='Enter email (optional)'/>
              </div>
              <div className={styles.inputWrapper}>
                <Timeline fill={'#9d96a8'}/>
                <input placeholder='Event links'/>
              </div>
              <div className={styles.inputWrapper}>
                <Resource fill={'#9d96a8'}/>
                <input placeholder='Resource links'/>
              </div>
          </div>
        </div>
    </div>
  )

}

export default Contribute