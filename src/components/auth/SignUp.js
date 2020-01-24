import React, { useState } from "react";
import firebase from "../../config/fbConfig";

const SignUp = props => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_rep, setPassword_rep] = useState("");
  const [display_name, setDisplayName] = useState("");

  const textAlign = { textAlign: "center" };


  const handleChange = e => {
    if (e.target.id === "display_name") setDisplayName(e.target.value);
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
    if (e.target.id === "password_rep") setPassword_rep(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      console.log(err);
    });
  };
  return (
    <div className="container">
      <h1 className="container" style={textAlign}>
        Sign Up
      </h1>
      <form
        className="form row row-cols-1"
        onSubmit={handleSubmit}
        style={textAlign}
      >
        <div className="col">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter user name"
            id="display_name"
            name="display_name"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label>Email</label>
          <input
            className=""
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
            required
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label>Password</label>
          <input
            className=""
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter Password..."
            required
          />
        </div>
        <div className="col">
          <label>Re Enter Password </label>
          <input
            className=""
            type="password"
            name="password_rep"
            id="password_rep"
            placeholder="Re-Enter Password..."
            required
            onChange={handleChange}
          />
        </div>

        <input
          className="button"
          type="submit"
          value="SIGNUP"
          style={{ display: "inline-block", width: "100px" }}
        />
      </form>
    </div>
  );
};

export default SignUp;
