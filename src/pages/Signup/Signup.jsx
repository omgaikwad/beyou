import React from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <div className="Signup">
      <Navbar />
      <div className="signup-form-container">
        <form className="signup-form">
          <h3 className="signup-heading">Sign Up</h3>
          <label htmlFor="form-first-name">First Name</label>
          <input id="form-first-name" type="text" placeholder="First Name" />

          <label htmlFor="form-last-name">Last Name</label>
          <input id="form-last-name" type="text" placeholder="Last Name" />

          <label htmlFor="form-email">Email</label>
          <input id="form-email" type="email" placeholder="Email" />

          <label htmlFor="form-password">Create Password</label>
          <input id="form-password" type="password" placeholder="Password" />

          <div className="form-checkbox">
            <input type="checkbox" />
            <p>I agree to the terms and conditions.</p>
          </div>

          <div className="form-buttons">
            <button className="btn btn-primary signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
