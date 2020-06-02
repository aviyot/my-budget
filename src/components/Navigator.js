import React from "react";
import { Route, Link, Switch} from "react-router-dom";

import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Welcome from "./welcome";
import Data from "./Data";
import firebase from "../config/fbConfig";
import Home from "./Home";
export default function Navigator(props) {
  return (
    <div>
      {!props.logIn ? (
        <div>
          <Link to="/signin" style={{ margin: "2rem" }}>
            Sign In
          </Link>
          <Link to="/signup" style={{ margin: "2rem" }}>
            Sign Up
          </Link>
        </div>
      ) : (
        <Link to="/signin">
         
          <input
            type="button"
            value="SIGN OUT"
            onClick={() => {
              firebase.auth().signOut();
            }}
          />
        </Link>
      )}
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/data">
          <Data />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
