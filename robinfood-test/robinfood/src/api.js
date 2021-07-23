const URL = "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json";

function getStores () {
 return fetch(URL)
    .then(res => res.json())
    .then(res => res.response.stores)
}
function getUsers () {
  return fetch(URL)
    .then(res => res.json())
    .then(res => res.response.users)
}


export default {
 getStores,
 getUsers
} 
