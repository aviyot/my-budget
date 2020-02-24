import React, { useState,useContext} from "react";
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import firebase from "./config/fbConfig";
import ExpensesContext from "./contextStore";

import "./App.css";
import Navigator from "./components/Navigator";

import {expenses} from "./contextStore"


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
    <ExpensesContext.Provider value = {expenses}>
    <div>
      {authState && (
        <Router>
          <Navigator logIn={userSignIn} />
          {userSignIn ? <Redirect to="/home" /> : null}
        </Router>
      )}
    </div>
    </ExpensesContext.Provider>
  );
}

export default App;
