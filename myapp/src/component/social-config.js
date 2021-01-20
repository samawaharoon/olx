import React,{component}  from 'react';
import firebase from '../component/firebase';


onsubmit = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
   console.log = (error);
  });
}





  const google = {
    client_id:169306172412,
     scope: "https://www.googleapis.com/auth/plus.login"

  };
  
  export const googleConfig = google;









  
  