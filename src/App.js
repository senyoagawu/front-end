import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {LoginForm, SignUpForm, EditProfileForm}  from "./Components/Pages/Forms";
// import Login from './Components/Forms/Login'
// import Signup from './Components/Views/Signup'
import Splash from "./Components/Views/Splash";
import { PrivateRoute, AuthRoute } from "./utils/routes";
import Home from "./Components/Views/Home";

const App = (props) => {
  const {user, token} = localStorage
  const [userState, setUser] = useState(user);
  const [tokenState, setTokenState] = useState(token);
  console.log(setTokenState)

  const loggedIn = !!tokenState;

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path='/splash' component={Splash} loggedIn={loggedIn} />

        {/* <AuthRoute exact path='/' component={Home} />
        <Route path='/splash' component={Splash} /> */}
        {/* <AuthRoute
          path="/splash"
          render={(props)=> <Splash {...props} loggedIn={loggedIn} setUser={setUser} userState={userState} setTokenState={setTokenState}/>} 
        /> */}
        <PrivateRoute exact path="/" component={Home} loggedIn={loggedIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App