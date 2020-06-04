import React, { useState } from 'react'

import styles from './style.module.css'

function Header() {

  const [isTitle, changeText] = useState('true');

  return (
    <div className={styles.container}> 
      <span className={styles.title} 
            onMouseEnter={() => changeText(false)}
            onMouseLeave={() => changeText(true)} >
        {isTitle ? `timeline` : `BLACK LIVES MATTER`}
      </span>
      <span className={styles.links}>
        <span className={styles.subtitle}>link 1</span>
        <span className={styles.subtitle}>link 2</span>
        <span className={styles.subtitle}>link 3</span>
      </span>
    </div>
  )
}

export default Header