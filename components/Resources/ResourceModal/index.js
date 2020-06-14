import React from 'react'
import styles from './style.module.css'
import InstagramEmbed from 'react-instagram-embed';

export default function ResourceModal({resource, handleClose, show}) {

  if (show) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <img className={styles.close} src={require('../../../public/photos/close.png')} onClick={handleClose}/>
          <div className={styles.resource} >
            <InstagramEmbed url={resource} hideCaption={true} />
          </div>
        </div>
      </div>
    );
  } else {
    return (<div />);
  }
};
