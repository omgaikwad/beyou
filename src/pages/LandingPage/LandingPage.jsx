import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="left-cta-container">
        <img
          className="cta-illustration"
          src="/assets/illustrations/illustration.svg"
          alt=""
        />
      </div>
      <div className="right-cta-container">
        <div className="right-cta-para">
          <h1>be as real on socials as in real life</h1>
          <h1>be unfiltered</h1>
        </div>
        <img className="beyou-logo" src="/assets/logo/beyou-logo.png" alt="" />
        <div className="cta-btn-container">
          <button className="btn btn-primary btn-join">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
