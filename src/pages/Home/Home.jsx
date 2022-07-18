import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />

      <div className="homeContainer">
        <div className="navigationTab">
          <div className="navigationContainer">
            <button className="navigationBtn">
              <i class="fa-solid fa-house"></i> Home
            </button>

            <button className="navigationBtn">
              <i class="fa-solid fa-rocket"></i> Explore
            </button>

            <button className="navigationBtn">
              <i class="fa-solid fa-bookmark"></i> Bookmark
            </button>

            <button className="navigationBtn">
              <i class="fa-solid fa-bell"></i> Notification
            </button>

            <button className="navigationBtn">
              <i class="fa-solid fa-user"></i> Profile
            </button>

            <button className="createNewPostBtn">Create a New Post</button>
          </div>
        </div>

        <div className="feed">Feed</div>

        <div className="searchContainer">Search Container</div>
      </div>
    </div>
  );
};

export default Home;
