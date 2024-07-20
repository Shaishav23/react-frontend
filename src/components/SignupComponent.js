import React, { useState } from "react";
import axios from "axios";

const SignupCpmponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USER_BASE_API_URL = "http://localhost:4000/api/auth/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(USER_BASE_API_URL + "signup", {
        email,
        password,
      });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label className="form-label">Username :</label>
          <input
            type="text"
            placeholder="Username"
            name="Username"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Password :</label>
          <input
            type="password"
            placeholder="password"
            name="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupCpmponent;
