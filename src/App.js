import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {LoginForm, SignUpForm, EditProfileForm}  from "./Components/Pages/Forms";
// import Login from './Components/Forms/Login'
// import Signup from './Components/Views/Signup'
import Splash from "./Components/Views/Splash";
import { PrivateRoute, AuthRoute } from "./utils/routes";
import Home from "./Components/Views/Home";
import {getInterests} from './utils/ajax'




const App = (props) => {
  const {user, access_token:token} = localStorage
  const loggedIn = !!token;

  // const [userState, setUser] = useState(user ? JSON.parse(user) : user);
  // const [tokenState, setTokenState] = useState(access_token);
  useEffect(()=> {
    (async () => {
      const interests = await getInterests();
       setState({user, token, loggedIn, interests})
    })();
  }, [])

  const [state, setState] = useState({
    user: user ? JSON.parse(user) : '',
    token,
    loggedIn,
    interests: ''
  })

  
  // const state = {
  //   user: userinfo,
  //   loggedIn: loggedIn,
  //   token: token,
  //   interests: ['interests, ordered by your interests then others'], //maybe eventually ordered by popularity
  //   mainfeed: {
  //     posts: ['your posts, your friends posts, and people with the same interests posts', {
  //       examplePost: {
  //         body: body,
  //         authorId: id,
  //         etc,
  //         comments: ['all the comments on that post', {
  //           exampleComment: {
  //             body: body,
  //             authorId: id,
  //             etc,
  //             reaction: ['all the reactions for that post', {
  //               exampleReaction: {
  //                 type: like,
  //                 authorId: id,
  //                 etc,
  //               }}
  //             ] 
  //           }}
  //         ],
  //         reactions: ['all the reactions for that post',{
  //           exampleReaction: {
  //             type: like,
  //             authorId: id,
  //             etc,
  //           }}
  //         ],
  //       }}
  //     ] 
  //   }
  // }

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path='/splash' component={Splash} loggedIn={state.loggedIn} />

        {/* <AuthRoute exact path='/' component={Home} />
        <Route path='/splash' component={Splash} /> */}
        {/* <AuthRoute
          path="/splash"
          render={(props)=> <Splash {...props} loggedIn={loggedIn} setUser={setUser} userState={userState} setTokenState={setTokenState}/>} 
        /> */}
        <PrivateRoute exact path="/" component={Home} loggedIn={state.loggedIn} />
      </Switch>
    </BrowserRouter>

  );
};

export default App