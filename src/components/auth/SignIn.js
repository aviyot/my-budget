import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../config/fbConfig";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const textAlign = { textAlign: "center" };

  const handleChange = (e) => {
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} style={textAlign}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="Enter Email..."
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="Enter Password..."
            required
          />
        </div>
        <input className="btn" type="submit" value="SIGNIN" />
      </form>
    </div>
  );
};

export default SignIn;
