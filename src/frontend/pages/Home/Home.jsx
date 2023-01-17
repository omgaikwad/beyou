import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import NavigationTab from "../../components/NavigationTab/NavigationTab";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />

      <div className="homeContainer">
        <NavigationTab />

        <div className="feed">
          <CreatePost />

          <div className="expoloreFeedContainer">
            <Post />
            <Post />
            <Post />
            <Post />
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
