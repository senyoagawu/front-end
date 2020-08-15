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

export const postSessions = async (data) => {
  return await myPost(backendUrl + "/sessions/", data);
};

export const signupUser = (data) => {
  return myPost(backendUrl + "/sessions/signup/", data);
};

export const editProfile = (email, data) => {
  return myPut(backendUrl + `/users/${email}/`, data);
};

export const getInterests = () => {
  return myGet(backendUrl + "/interests/");
};
// headers: { Authorization: `Bearer ${token}` },
export const addInterest = async data => {
  console.log(data)
  return await myPost(backendUrl + '/interests/', data)
}