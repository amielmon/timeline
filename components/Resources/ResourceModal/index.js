import React, {useRef, useEffect} from 'react'
import styles from './style.module.css'
import InstagramEmbed from 'react-instagram-embed';

export default function ResourceModal({resource, handleClose, show}) {

  const modalRef = useRef(null)

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current.contains(e.target)) {
        return;
      }
      handleClose(false);
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [show, modalRef, handleClose])

  if (show) {
    return (
      <div className={styles.container} ref={modalRef}>
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
