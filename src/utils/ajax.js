const backendUrl = "http://localhost:5000/api";

const ourGet = async(path) => {
  const response = await fetch(path);
  return await response.json();
}
 
const ourPost = async(path, data,) => {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await response.json();
}

 
const ourPut = async(path, data) => {
  const response = await fetch(path, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await response.json();
}


export const postSessions = async(data) => {
  return await ourPost(backendUrl + '/sessions/', data)
}

export const signupUser = (data) => {
  return  ourPost(backendUrl+ '/sessions/signup', data)
}

export const editProfile = (email, data) => {
  return  ourPut(backendUrl+ `/users/${email}`, data)
}

// headers: { Authorization: `Bearer ${token}` },
