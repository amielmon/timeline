import React, {useState} from 'react'
import styles from './style.module.css'
import User from '../Icons/User'
import Email from '../Icons/Email'
import Timeline from '../Icons/Timeline'
import Resource from '../Icons/Resource'

function Contribute() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [eventLinks, setEventLinks] = useState('')
  const [resourceLinks, setResourceLinks] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [canShowName, setCanShowName] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email || regexp.test(email)) {
      setIsValidEmail(true)
      setShowEmailError(false)
    } else {
      setIsValidEmail(false)
      setShowEmailError(true)
    }
  }

  const handleSubmit = async () => {
    if ((email && !isValidEmail) || (!eventLinks && !resourceLinks)) {
      setSubmitError(true)
    } else {
      const res = await fetch('http://localhost:3000/api/events', {
        method: 'post',
        body: JSON.stringify({name: name, email: email, eventLinks: eventLinks, resourceLinks: resourceLinks})
      })
    }
  }

  // Timeout to allow resubmission

  console.log('isValidEmail', isValidEmail)
  console.log('showEmailError', showEmailError)
  console.log('submitError', submitError)
  console.log('name', name)
  console.log('email', email)
  console.log('eventLinks', eventLinks)
  console.log('resourceLinks', resourceLinks)


  return (
    <div className={styles.container}>
      <div className={styles.title}>Contribute</div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formTitle}>Submit events or resources</div>
            <div className={styles.inputWrapper}>
                <User fill={'#ad1010'}/>
                <input placeholder='Name (optional)' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className={styles.inputWrapper}>
                <Email fill={'#ad1010'}/>
                <input placeholder='Email (optional)'  value={email} onBlur={() => validateEmail(email)} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className={styles.inputWrapper}>
                <Timeline fill={'#ad1010'}/>
                <input placeholder='Event links'  value={eventLinks} onChange={(e) => setEventLinks(e.target.value)}/>
              </div>
              <div className={styles.inputWrapper}>
                <Resource fill={'#ad1010'}/>
                <input placeholder='Resource links'  value={resourceLinks} onChange={(e) => setResourceLinks(e.target.value)}/>
              </div>
              <div className={styles.submitContainer}>
                <div className={styles.submit} onClick={handleSubmit}>
                  <span>Submit</span>
                  </div>
                <div className={styles.nameCheckbox}/>
              </div>
          </form>
        </div>
    </div>
  )

}

export default Contribute