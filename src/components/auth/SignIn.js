import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../config/fbConfig";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const textAlign = { textAlign: "center" };

  const handleChange = e => {
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
      })
      .catch(err => {
        console.log(err.code);
      });
  };

  return (
    <div className="container">
      <h1 className="container" style={textAlign}>
        Sign In
      </h1>
      <form
        className="container row row-cols-1"
        onSubmit={handleSubmit}
        style={textAlign}
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="Enter Email..."
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="Enter Password..."
            required
          />
        </div>
        <input
          className="button"
          type="submit"
          value="SIGNIN"
          style={{ display: "inline-block", width: "100px" }}
        />
      </form>
    </div>
  );
};

export default SignIn;
