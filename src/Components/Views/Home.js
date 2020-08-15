import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import MainFeed from "../MainFeed";
import EditProfile from "../Forms/EditProfile";
import Interests from '../Forms/Interests'

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
      <Navbar setModal={setModal} />
      <EditProfile setModal={setModal} />
      <MainFeed setModal={setModal} />
    </div>
  ) : modalStates.whichModal === "interests" ? (
    <div>
      <Navbar setModal={setModal} />
      <Interests setModal={setModal}/>
      <MainFeed setModal={setModal} />
    </div>
  ): (
    <div>
      <Navbar setModal={setModal} />
      <MainFeed setModal={setModal} />
    </div>
  );
};

export default Home;
