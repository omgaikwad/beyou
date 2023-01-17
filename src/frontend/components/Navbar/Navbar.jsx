import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="left-navbar-container">
        <Link to="/">
          <img
            className="navbar-logo"
            src="/assets/logo/beyou-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="right-navbar-container">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
