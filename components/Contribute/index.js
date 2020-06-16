import React, {useState} from 'react'
import styles from './style.module.css'

function Contribute() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contribute</div>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <div className={styles.formTitle}>Submit events or resources</div>
            <div className={styles.name}>
              <input></input>
            </div>
            
          </div>
        </div>
    </div>
  )

}

export default Contribute