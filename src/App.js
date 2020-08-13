import React, {setState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {LoginForm, SignUpForm, EditProfileForm}  from "./Components/Pages/Forms";
// import Login from './Components/Forms/Login'
// import Signup from './Components/Views/Signup'
import Splash from './Components/Views/Splash'
import {PrivateRoute, AuthRoute} from './utils/routes'
import Home from './Components/Views/Home'

const App = (props) => {
  const [userEmail, setUserEmail] = setState('')
  const [tokenState, setTokenState ] = setState('')

  const token = localStorage.access_token || tokenState
  const loggedIn = Boolean(token)

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/splash" component={Splash} loggedIn={loggedIn}  setUserEmail={setUserEmail} setTokenState={setTokenState}/>
        <PrivateRoute exact path="/" component={Home}   loggedIn={loggedIn}/>
        {/* <Route path="/splash" component={Splash} />
        <Route exact path="/" component={Home}  /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
