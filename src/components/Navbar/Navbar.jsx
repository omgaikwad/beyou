import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="left-navbar-container">
        <img className="navbar-logo" src="/assets/logo/beyou-logo.png" alt="" />
      </div>
      <div className="right-navbar-container">
        <button className="btn btn-primary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
