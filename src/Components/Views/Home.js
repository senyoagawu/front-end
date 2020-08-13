import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import { NavBar } from "../Navbar";
import { MainFeed } from "../MainFeed";
import EditProfile from '../Forms/EditProfile'

const Home = (props) => {
  let history = useHistory();

  const [modalStates, setModal] = useState({
    whichModal: undefined,
  });

  const links = {
    about: "http://sdkag.github.io",
    // home: '/',  home can just be the close bar..
    profile: "/profile",
    interests: "/channels",
  };
  return modalStates.whichModal === "profile" ? (
    <div>
      <EditProfile setModal={setModal}/>
      <NavBar setModal={setModal}/>
      <MainFeed setModal={setModal}/>
    </div>
  ) : modalStates.whichModal === "interests" ? (
    <div>
      {/* <Channel setModal={setModal}/> */}
      <NavBar setModal={setModal}/>
      <MainFeed setModal={setModal}/>
    </div>
  ) : (
    <div>
      <NavBar setModal={setModal}/>
      <MainFeed setModal={setModal}/>
    </div>
  );
};

export default Home;
