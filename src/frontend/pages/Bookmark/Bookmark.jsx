import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import Post from "../../components/Post/Post";
import "./Bookmark.css";
import NavigationTab from "../../components/NavigationTab/NavigationTab";

const Bookmark = () => {
  return (
    <div className="Home">
      <Navbar />

      <div className="homeContainer">
        <NavigationTab />

        <div className="feed">
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

export default Bookmark;
