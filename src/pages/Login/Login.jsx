import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <div className="login-form-container">
        <form className="login-form">
          <h3 className="signup-heading">Login</h3>
          <label htmlFor="form-login-email">Email</label>
          <input
            id="form-login-email"
            type="email"
            placeholder="abc@gmail.com"
          />

          <div className="login-password-container">
            <label htmlFor="form-login-password">Password</label>
            <input
              id="form-login-password"
              type="password"
              placeholder="·········"
            />
            <i class="fa-solid fa-eye-slash eye-icon"></i>
          </div>

          <div className="form-checkbox">
            <input type="checkbox" />
            <p>I agree to the terms and conditions.</p>
          </div>

          <div className="form-buttons">
            <button className="btn btn-outline-primary signup-btn">
              Login
            </button>
            <button className="btn btn-primary signup-btn">
              Login as Guest
            </button>
            <a href="#" class="btn-link form-btn-link">
              Create new Account <i class="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
