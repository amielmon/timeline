import React, { useState } from 'react'
import styles from './style.module.css'

function Header() {

  const [isTitle, changeText] = useState(true);

  return (
    <div className={styles.container}> 
      <span className={styles.title} 
            onMouseEnter={() => changeText(false)}
            onMouseLeave={() => changeText(true)} >
        {isTitle ? `TBD` : `BLACK LIVES MATTER`}
      </span>
      <span className={styles.links}>
        <a className={styles.subtitle} href={'#timeline'}>timeline</a>
        <a className={styles.subtitle} href={'#resources'}>resources</a>
        <a className={styles.subtitle} href={'#contribute'}>contribute</a>
      </span>
    </div>
  )
}

export default Header