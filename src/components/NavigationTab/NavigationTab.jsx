import React from "react";
import "./NavigationTab.css";
import { Link } from "react-router-dom";

const NavigationTab = () => {
  return (
    <div className="navigationTab">
      <div className="navigationContainer">
        <Link to="/home">
          <button className="navigationBtn">
            <i class="fa-solid fa-house"></i> Home
          </button>
        </Link>
        <Link to="/explore">
          <button className="navigationBtn">
            <i class="fa-solid fa-rocket"></i> Explore
          </button>
        </Link>
        <Link to="/bookmark">
          <button className="navigationBtn">
            <i class="fa-solid fa-bookmark"></i> Bookmarks
          </button>
        </Link>
        <Link to="/myprofile">
          <button className="navigationBtn">
            <i class="fa-solid fa-user"></i> Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationTab;
