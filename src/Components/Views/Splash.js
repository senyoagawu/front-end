import React, {useState} from 'react'
import { useHistory,Redirect } from "react-router-dom";
import SplashMain from '../splash_sub'
import {postSessions} from '../../utils/ajax'
import Signup from '../Forms/Signup';
import Login from '../Forms/Login'


export default ({setUserEmail , setTokenState}) => {
  let history = useHistory();
  const [modalStates, setModal] = useState({
    whichModal: undefined
  })

  const links = {
    about: 'http://sdkag.github.io',
    login: '/login',
    create: '/create'
  }
  const modals = {
    login: Login
  }

  const clickModal = e => {
    debugger
    console.log(e.target)
  }

  // const onclick = (e) => {
  //   history.push(links[e.target.id])
  // }

  const login = (e, payload) => {
    e.preventDefault()
    // history.push('/login')
  };

  const signup = e => {
    e.preventDefault();
    // history.push('/create')
  }

  return modalStates.whichModal ?  
    modalStates.whichModal === 'login' ? (
          <>
            <Login  setModal={setModal} setUserEmail={setUserEmail} setTokenState={setTokenState}/>
            <SplashMain setModal={setModal}/>
          </>
        ) : (
          <>
            <Signup  setModal={setModal} setUserEmail={setUserEmail} setTokenState={setTokenState}/>
            <SplashMain setModal={setModal}/>
          </>  
      ) : <SplashMain setModal={setModal} setModal={setModal}/>
};

