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
    <nav class="navbar navbar-dark">

      {!props.logIn ? (
        <div>
          <Link to="/signin">
            <input type="button"
              className="btn"
              value="SIGN IN">
          
            </input>
          </Link>
          <Link to="/signup" >
          <input type="button"
              className="btn"
              value="SIGN UP">
                    
            </input>
       
          </Link>
        </div>
      ) : (
        <div>
        <Link to="/signin">
         <input
         className="btn"
            type="button"
            value="SIGN OUT"
            onClick={() => {
              firebase.auth().signOut();
            }}
          />
          </Link>
          </div>

      )}
      </nav>
        
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
