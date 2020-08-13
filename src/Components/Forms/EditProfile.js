import React, { useState } from "react";
// import {NavBar} from "../Navbar";
import styles from './Form.module.css'
// import { uploadImage } from "../../uploadImage";
import {editProfile} from '../../utils/ajax'


const EditProfile = ({setModal}) => {
  // const [profileImage, setImage] = useState(undefined)
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
    location: "",
  });

  const closeModal = () => {
    setModal({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editProfile(JSON.stringify(profile))
    // history.push('/')
  };

  const onchange = (e) => {
    e.preventDefault();
    const [field, val] = [e.target.name, e.target.value];
    setProfile({
      ...profile,
      ...{ [field]: val },
    });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.form_container}>
        <h2>Edit Profile</h2>
        <form className={styles.profile_form}>
          <div className={styles.closeBtn} onClick={closeModal}>
            close
          </div>
          <div className={styles.field_container}>
            <input
              className={styles.inputs}
              type="text"
              value={profile.first_name}
              placeholder="First Name"
              name="first_name"
              onChange={onchange}
            />
          </div>
          <div className={styles.field_container}>
            <input
              className={styles.inputs}
              type="text"
              value={profile.last_name}
              placeholder="Last Name"
              name="last_name"
              onChange={onchange}
            />
          </div>
          <div className={styles.field_container}>
            <input
              className={styles.inputs}
              type="text"
              value={profile.email}
              placeholder="Email"
              name="email"
              onChange={onchange}
            />
          </div>
          <div className={styles.field_container}>
            <input
              className={styles.inputs}
              type="text"
              value={profile.bio}
              placeholder="Bio"
              name="bio"
              onChange={onchange}
            />
          </div>
          <div className={styles.field_container}>
            <input
              className={styles.inputs}
              type="text"
              value={profile.location}
              placeholder="Location"
              name="location"
              onChange={onchange}
            />
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile

// TODO: add default values based on current user, add upload support with AWS
