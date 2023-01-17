import React, { useRef, useState } from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/auth/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const signupError = useSelector((state) => state.auth.error);

  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({
    showError: false,
    errorMessage: "",
  });

  const signupHandler = async (signupData) => {
    const response = await dispatch(signup(signupData));

    console.log(response);

    if (response?.payload.encodedToken) {
      navigate("/home");
    }

    setSignupData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="Signup">
      <Navbar />
      <div className="signup-form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler(signupData);
          }}
          className="signup-form"
        >
          <h3 className="signup-heading">Sign Up</h3>

          <label htmlFor="form-first-name">First Name</label>
          <input
            required
            onChange={(e) =>
              setSignupData({ ...signupData, firstName: e.target.value })
            }
            value={signupData.firstName}
            id="form-first-name"
            type="text"
            placeholder="John"
          />

          <label htmlFor="form-last-name">Last Name</label>
          <input
            required
            onChange={(e) =>
              setSignupData({ ...signupData, lastName: e.target.value })
            }
            value={signupData.lastName}
            id="form-last-name"
            type="text"
            placeholder="Wick"
          />

          <label htmlFor="form-email">Username</label>
          <input
            required
            onChange={(e) =>
              setSignupData({ ...signupData, username: e.target.value })
            }
            value={signupData.username}
            id="form-email"
            type="text"
            placeholder="johnwick"
          />

          <div className="login-password-container">
            <label htmlFor="form-password">Create Password</label>
            <input
              required
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              value={signupData.password}
              id="form-password"
              type={showPassword.showPassword ? "text" : "password"}
              placeholder="••••••••••••••"
            />
            {showPassword ? (
              <i
                onClick={() =>
                  setShowPassword({ ...showPassword, showPassword: false })
                }
                className="fa-solid fa-eye eye-icon"
              ></i>
            ) : (
              <i
                onClick={() =>
                  setShowPassword({ ...showPassword, showPassword: true })
                }
                className="fa-solid fa-eye-slash eye-icon"
              ></i>
            )}
          </div>

          <div className="form-checkbox">
            <input required type="checkbox" />
            <p>I agree to the terms and conditions.</p>
          </div>

          {error.showError ? (
            <div className="error-container">{error.errorMessage}</div>
          ) : null}

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary signup-btn">
              Sign Up
            </button>
            <Link to="/login" className="btn-link form-btn-link">
              Already have an Account
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
