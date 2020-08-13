import React, {useState} from 'react'
import { useHistory,Redirect } from "react-router-dom";
import SplashMain from '../subcomponents/splash_sub'
import {postSessions} from '../../utils/ajax'
import Signup from '../Forms/Signup';
import Login from '../Forms/Login'


export default (props) => {
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

  const onclick = (e) => {
    history.push(links[e.target.id])
  }

  const login = (e, payload) => {
    e.preventDefault()
    history.push('/login')
  };

  const signup = e => {
    e.preventDefault();
    history.push('/create')
  }

  console.log(modalStates)
  return modalStates.whichModal ?  
    modalStates.whichModal === 'login' ? (
          <>
            <Login onClick={clickModal} setModal={setModal}/>
            <SplashMain setModal={setModal}/>
          </>
        ) : (
          <>
            <Signup onClick={clickModal} setModal={setModal}/>
            <SplashMain setModal={setModal}/>
          </>  
      ) : <SplashMain setModal={setModal} setModal={setModal}/>
};

