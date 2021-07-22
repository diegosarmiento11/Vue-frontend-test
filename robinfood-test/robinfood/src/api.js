const URL = "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json";

function getAssets () {
 return fetch(URL)
    .then(res => res.json())
    .then(res => res.response.stores)
}

export default {
 getAssets
} 


