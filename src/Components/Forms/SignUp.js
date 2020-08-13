import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {signupUser} from '../../utils/ajax'
import styles from './Form.module.css'

export default ({setModal}) => {
  let history = useHistory();
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  const [signupState, setSignup] = useState({
    email: '',
    firstName: '',
    password: '',
    confirmPassword: '',
  })
  
  const closeModal =() => {
    setModal({})
  }

  const handleSubmit = (e, payload) => {
    const user = payload || signupState 
    e.preventDefault()
    // postSessions()
    history.push('/')
  };

  const login = e => {
    e.preventDefault();
    setModal({whichModal: 'login'})
  }

  const onchange = e => {
    e.preventDefault()
    const [field, val] = [e.target.name, e.target.value]
    setSignup({
      ...signupState, 
      ...{[field]:val}
    })
  }

  const togglePassword = e => {
    e.preventDefault()
    if (e.target.id === 'password'){
      setPasswordVisible(!passwordVisible)
    } else{
      setConfirmPasswordVisible(!confirmPasswordVisible)
    }
  }
 
  


  
  return (
    <div className={styles.form_container}>
      <form className={styles.signup_form}>
      <div className={styles.closeBtn} onClick={closeModal}> close </div>
        <div className={styles.field_container}>
          <input className={styles.inputs} type="text" value={signupState.email} placeholder="Email" name="email" onChange={onchange} />
        </div>
        <div className={styles.field_container}>
          <input className={styles.inputs} type="text" value={signupState.firstName} placeholder="First Name" name="firstName" onChange={onchange} />
        </div>
        <div className={styles.field_div}>
          <div className={styles.show_container}>
            <input className={styles.inputs} type={passwordVisible ? "text": "password"}  value={signupState.password} placeholder="Password" name="password" onChange={onchange} />
            <button className={styles.show_button} id="password" onClick={togglePassword}>{passwordVisible ? 'Hide' : 'Show'}</button>
          </div>
        </div>
        <div className={styles.field_div}>
          <div className={styles.show_container}>
            <input className={styles.inputs}  type={confirmPasswordVisible ? "text": "password"} value={signupState.confirmPassword} placeholder="Confirm Password" name="confirmPassword" onChange={onchange} />
            <button className={styles.show_button} id="confirmPassword" onClick={togglePassword}>{confirmPasswordVisible ? 'Hide' : 'Show'}</button>
          </div>
        </div>
          <button className={styles.button} onClick={handleSubmit}>
            Sign Up
          </button>
        <div className={styles._instead}>
          <p>Already have an <span className={styles.backto} onClick={login}>account</span>? </p>
        </div>
      </form>
    </div>
  )

}


