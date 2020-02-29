import React, { useState,useContext , useReducer} from "react";
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import firebase from "./config/fbConfig";
import ExpensesContext from "./contexts/contextStore";

import "./App.css";
import Navigator from "./components/Navigator";
import {expenses} from "./contexts/contextStore"
import expensesReducer from "./reducers/expensesReducer";


function App() {

  const [userSignIn, setUserSignIn] = useState(false);
  const [authState, setAuthState] = useState(false);

  const [expenses , dispatch] = useReducer(expensesReducer,[],()=>{
    return 
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      setUserSignIn(true);
      setAuthState(true);

    } else {
      setUserSignIn(false);
      setAuthState(true);
      console.log("User is signed out");
    }
  });

  return (
    <ExpensesContext.Provider value = {{expenses,dispatch}}>
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
