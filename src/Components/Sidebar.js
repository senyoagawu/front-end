import React, { useContext } from "react";
import { AppContext } from "../App";
import styles from "./Views/Home.module.css";

const Sidebar = ({ setModal }) => {
  const {
    state: { posts },
    state: { user },
    state: { interests },
  } = useContext(AppContext);

  const onclick = (e) => {
    setModal({
      whichModal: e.target.id,
    });
  };

  const edit_profile = () => {};
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.profile_pic_container}>
        <img
          className={styles.profile_pic}
          src={user.profile_pic}
          alt="profile pic"
        />
      </div>
      <div
        className={styles.name}
      >{`${user.first_name} ${user.last_name}`}</div>
      <div className={styles.bio}>{user.bio}</div>
      <div className={styles.location}>{user.location}</div>
      <div className={styles.edit_profile}>
        <button id="profile" className={styles.edit_profile_button} onClick={onclick}>
          Edit Profile
        </button>
        <button id="interests" className={styles.edit_profile_button} onClick={onclick}>
          Edit Interests
        </button>
      </div>
      <div className={styles.interests}></div>
      <div className={styles.num_interests}>{interests?.followed?.length}</div>
      <div className={styles.num_interests_created}>
        {interests?.created?.length}
      </div>
      <div className={styles.num_posts}>{posts?.length}</div>
    </div>
  );
};

// bio
// edit profile
// interests
// # interests
// # interests created
// # posts made

export default Sidebar;
