const backendUrl = "http://localhost:5000/api";

const myGet = async (path) => {
  const response = await fetch(path);
  return await response.json();
};

const myPost = async (path, data) => {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const myPut = async (path, data) => {
  const response = await fetch(path, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const myDelete = async (path, data) => {
  const response = await fetch(path, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const postSessions = async (data) => {
  return await myPost(backendUrl + "/sessions/", data);
};

export const signupUser = (data) => {
  return myPost(backendUrl + "/sessions/signup/", data);
};

export const editProfile = async(email, data) => {
  console.log(email, data)
  return await myPut(backendUrl + `/users/${email}/`, data);
};

export const getInterests = () => {
  return myGet(backendUrl + "/interests/");
};
// headers: { Authorization: `Bearer ${token}` },
export const addInterest = async data => {
  console.log(data)
  return await myPost(backendUrl + '/interests/', data)
}


export const getInterestsFollowed = (email) => {  //!how is this working (asynchronicity)
  return myGet(backendUrl + `/interests/${email}/`);
};

export const followInterest =( email, id) => {
  return myPost(backendUrl + `/interests_users/${email}/${id}/`);

}
export const unfollowInterest =(email, id) => {
  return myDelete(backendUrl + `/interests_users/${email}/${id}/`);

}

export const getPosts = email => {
  return myGet(backendUrl + `/posts/${email}/`)
}