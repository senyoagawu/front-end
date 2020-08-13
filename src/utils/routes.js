import React from "react";
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      Boolean(rest.user) === false
      ? <Redirect to="/splash" />
      : <Component {...props} />
    )} />
  )
}

export const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      Boolean(rest.user) === true
      ? <Redirect to="/" />
      : <Component {...props} />
    )} />
  )
}