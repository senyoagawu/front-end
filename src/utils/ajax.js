const ourGet = async(path) => {
  const {backendUrl} = config 
  console.log(backendUrl, config)
  const response = await fetch(backendUrl + path);
  return await response.json();
}
 
const ourPost = async(path, data) => {
  const response = await fetch(backendUrl + path,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({data})
  });
  return await response.json();
}