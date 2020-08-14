import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import SplashSub from "../splash_sub";
import { postSessions } from "../../utils/ajax";
import Signup from "../Forms/Signup";
import Login from "../Forms/Login";

const Splash = (...props) => {
  let history = useHistory();
  const [modalStates, setModal] = useState({
    whichModal: undefined,
  });

  const links = {
    about: "http://sdkag.github.io",
    login: "/login",
    create: "/create",
  };
  const modals = {
    login: Login,
  };

  const clickModal = (e) => {
  };

  // const onclick = (e) => {
  //   history.push(links[e.target.id])
  // }

  const login = (e, payload) => {
    e.preventDefault();
    // history.push('/login')
  };

  const signup = (e) => {
    e.preventDefault();
    // history.push('/create')
  };

  return (
    <>
      {modalStates.whichModal === "login" ? (
        <Login
          setModal={setModal}
          // setUser={setUser}
          // setTokenState={setTokenState}
        />
      ) : null}
      {modalStates.whichModal === "signup" ? (
        <Signup
          setModal={setModal}
          // setUser={setUser}
          // setTokenState={setTokenState}
        />
      ) : null}
      <SplashSub setModal={setModal} />
    </>
  );
};
export default Splash