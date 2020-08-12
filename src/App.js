import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {LoginForm, SignUpForm, EditProfileForm}  from "./Components/Pages/Forms";
import {PrivateRoute, AuthRoute} from './config'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={LoginForm} rest={rest} />
        {/* email, password, submit */}
        <AuthRoute path="/create" component={SignUpForm} rest={rest} />
        {/* email, first_name, last_name, password, submit */}
        <PrivateRoute exact path="/" component={Home} rest={rest} />
        <PrivateRoute path="/edit" component={EditProfileForm} rest={rest} />
        {/* email, first_name, last_name, password, submit ||, profile_pic, email, title
*/} 
      </Switch>
    </BrowserRouter>
  );
};

export default App;
