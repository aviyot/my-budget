import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import firebase from "./config/fbConfig";

import "./App.css";
import Navigator from "./components/Navigator";


function App() {
 
  const [userSignIn, setUserSignIn] = useState(false);
  const [authState, setAuthState] = useState(false);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      setUserSignIn(true);
      setAuthState(true);
      /*  var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData; */
      // ...
    } else {
      setUserSignIn(false);
      setAuthState(true);
      console.log("User is signed out");
      // ...
    }
  });

  return (
    <div>
      {authState && (
        <Router>
          <Navigator logIn={userSignIn} />
          {userSignIn ? <Redirect to="/home" /> : null}
        </Router>
      )}
    </div>
  );
}

export default App;
