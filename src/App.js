import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {LoginForm, SignUpForm, EditProfileForm}  from "./Components/Pages/Forms";
// import Login from './Components/Forms/Login'
// import Signup from './Components/Views/Signup'
import Splash from "./Components/Views/Splash";
import { PrivateRoute, AuthRoute } from "./utils/routes";
import Home from "./Components/Views/Home";


const AppContext = React.createContext([{}, () => {}]);


const App = (props) => {
  const {user, access_token} = localStorage
  const [userState, setUser] = useState(JSON.parse(user));
  const [tokenState, setTokenState] = useState(access_token);

  const loggedIn = !!tokenState;

  return (
    <AppContext.Provider value={[userState, setUser,tokenState, setTokenState,loggedIn]}>
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
    </AppContext.Provider>

  );
};

export default App