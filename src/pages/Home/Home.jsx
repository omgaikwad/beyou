import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";

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
          </div>
        </div>

        <div className="feed">
          <CreatePost />

          <div className="expoloreFeedContainer">
            <Post />
            <Post />
          </div>
        </div>

        <div className="searchContainer">
          <div className="followSuggestion">
            <div className="whoToFollowHeading">
              <p>Who to follow?</p>
              <button className="beyouBtn">Show More</button>
            </div>
            <div className="followSuggestedUser">
              <ProfileTab
                name="Om Gaikwad"
                userName="OmGaikwad_"
                includeFollowBtn={true}
              />
              <ProfileTab
                name="Om Gaikwad"
                userName="OmGaikwad_"
                includeFollowBtn={true}
              />
              <ProfileTab
                name="Om Gaikwad"
                userName="OmGaikwad_"
                includeFollowBtn={true}
              />
              <ProfileTab
                name="Om Gaikwad"
                userName="OmGaikwad_"
                includeFollowBtn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
