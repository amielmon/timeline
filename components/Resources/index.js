import React, { useState } from 'react'
import ResourceModal from './ResourceModal'
import styles from './style.module.css'

export default function Resources() {

  const [showResource, toggleShow] = useState(false);

  const handleClick = () => {
    toggleShow(!showResource);
  }

  return (
  <div className={styles.container}>
    <span className={styles.title}>Resources</span>
    <div className={styles.imagesContainer}>
      <div className={styles.neumorphic}>
        <img className={styles.image} src={require('../../public/photos/resource.jpg')} onClick={handleClick}/>
      </div>
    </div>
    {showResource && 
      <ResourceModal handleClose={handleClick} show={showResource}/>
    }
  </div>
  )
}
