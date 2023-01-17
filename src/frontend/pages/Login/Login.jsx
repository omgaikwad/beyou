import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const loginError = useSelector((state) => state.auth.error);

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({
    showError: false,
    errorMessage: "",
  });

  const loginHandler = async (username, password) => {
    const response = await dispatch(login({ username, password }));

    if (response?.payload.encodedToken) {
      navigate("/home");
    }

    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="Login">
      <Navbar />
      <div className="login-form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(loginData.username, loginData.password);
          }}
          className="login-form"
        >
          <h3 className="signup-heading">Login</h3>
          <label htmlFor="form-login-email">Username</label>
          <input
            required
            onChange={(e) =>
              setLoginData({
                ...loginData,
                username: e.target.value,
              })
            }
            value={loginData.username}
            id="form-login-email"
            type="text"
            placeholder="johnwick"
          />

          <div className="login-password-container">
            <label htmlFor="form-login-password">Password</label>
            <input
              required
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
              value={loginData.password}
              id="form-login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••"
            />
            {showPassword ? (
              <i
                onClick={() => setShowPassword(false)}
                className="fa-solid fa-eye eye-icon"
              ></i>
            ) : (
              <i
                onClick={() => setShowPassword(true)}
                className="fa-solid fa-eye-slash eye-icon"
              ></i>
            )}
          </div>

          {error.showError ? (
            <div className="error-container">{error.errorMessage}</div>
          ) : null}

          <div className="form-buttons">
            <button
              type="submit"
              className="btn btn-outline-primary signup-btn"
            >
              Login
            </button>
            <button className="btn btn-primary signup-btn">
              Login as Guest
            </button>
            <Link to="/signup" className="btn-link form-btn-link">
              Create new Account <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
