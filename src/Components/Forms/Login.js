import React, { Component, useState} from 'react'
import { Redirect, useHistory } from "react-router-dom";
import "../../stylesheets/login.css";
// import backendUrl from "../../utils";
// yeha modules are wack



const Login = props => {
 
  render() {
    return (
      <div>
        
      </div>
    )
  }
};






const backendUrl = "http://localhost:5000/api";
const Login = (props) => {
  let history = useHistory();

  const [loginState, setLogin] = useState({
    email: null,
    password: null,
  })

  const onchange = e => {
    e.preventDefault()
    const [field, val] = [e.target.name, e.target.value]
    setLogin({
      ...loginState, 
      ...{[field]:val}
    })
  }
  const handleSubmit = (e, payload) => {
    const user = payload || loginState 
    e.preventDefault()

    postSessions()
    history.push('/')
  };

  const loginDemoUser = e => {
    e.preventDefault();
    const [password, email] = ['password', 'email']
    handleSubmit(event, {password, email})
  };


  // if tokenState history.push('/login')
  return (
      <div className="login-form-container">
        <form className="login-form ">
          <div>
            <input type="text" placeholder="Enter Email" value={loginState.email} name="email" onChange={onchange} />
          </div>
          <div>
            <input type="password" placeholder="Enter Password" value={loginState.password} name="password" onChange={onchange} />
          </div>
          <div>
            <button className="login-form submit-button" onClick={handleSubmit}>
              Log In
            </button>
          </div>
        </form>
        <div className="sign-up-ref">
          <p>Don't have an account? </p>
          <button onClick={loginDemoUser}>Demo User</button>
          <button onClick={signUp}>Sign Up</button>
        </div>
      </div>
  );
};

export default Login;
