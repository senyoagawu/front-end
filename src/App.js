import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// import {LoginForm, SignUpForm, EditProfileForm}  from "./Components/Pages/Forms";
// import Login from './Components/Forms/Login'
// import Signup from './Components/Views/Signup'
import Splash from './Components/Views/Splash'
import {PrivateRoute, AuthRoute} from './utils/routes'
import Home from './Components/Views/Home'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <AuthRoute path="/login" component={Login} rest={{}}/> */}
        <AuthRoute path="/splash" component={Splash} rest={{}}/>
        {/* <AuthRoute path="/create" component={Signup} rest={{}}/> */}
        <PrivateRoute exact path="/" component={Home}  rest={{}}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
