import React, { useState } from 'react'
import ResourceModal from './ResourceModal'
import styles from './style.module.css'
import { IMAGE_PATH } from './constants'

export default function Resources({data}) {

  const [showResource, setShowResource] = useState(false);
  const [resource, setResource] = useState('');

  const resources = data.map((r) => (
    <div className={styles.neumorphic}> 
      <img className={styles.image} src={IMAGE_PATH[`resource${r.imageId}`]} onClick={() => {setShowResource(!showResource); setResource(r.src)}} />
    </div> ))

  return (
  <div className={styles.container}>
    <div className={styles.title}>Resources</div>
    <div className={styles.imagesContainer}>
      {resources}
    </div>
    {showResource && 
      <ResourceModal resource={resource} handleClose={() => setShowResource(!showResource)} show={showResource}/>
    }
  </div>
  )
}
