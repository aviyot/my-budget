import React, { useState } from "react";
import firebase from "../../config/fbConfig";

const SignUp = props => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_rep, setPassword_rep] = useState("");
  //const [display_name, setDisplayName] = useState("");
  const [errorPassword,setErrorPassword] = useState("");



  const handleChange = e => {
    //if (e.target.id === "display_name") setDisplayName(e.target.value);
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
    if (e.target.id === "password_rep") setPassword_rep(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(password === password_rep) {
      setErrorPassword("");
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      console.log(err);
    });
  }
  else {
    setErrorPassword("PASSWORD NO MATCH");
    console.log("password no match")
  }
  };
  return (
    <div  class="container">
      <h1 >
        Sign Up
      </h1>
      <form
      
        onSubmit={handleSubmit}
   
      >
        <div >
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter user name"
            id="display_name"
            name="display_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
          
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
           
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter Password..."
            required
          />
        </div>
        <div>
          <label>Re Enter Password </label>
          <input
      
            type="password"
            name="password_rep"
            id="password_rep"
            placeholder="Re-Enter Password..."
            required
            onChange={handleChange}
          />
        </div>
        <p>{errorPassword}</p>
        <input
          className="btn"
          type="submit"
          value="SIGNUP"
        />
            
      </form>
 
    </div>
  );
};

export default SignUp;
