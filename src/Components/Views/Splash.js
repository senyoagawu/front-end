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

  const modals = {
    login: Login,
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