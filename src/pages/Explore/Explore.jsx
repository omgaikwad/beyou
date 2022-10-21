import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import Post from "../../components/Post/Post";
import "./Explore.css";
import NavigationTab from "../../components/NavigationTab/NavigationTab";

const Explore = () => {
  return (
    <div className="Explore">
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
            <div className="exploreBtnContainer">
              <button className="btn btn-primary explore-btns">
                <i class="fa-solid fa-arrow-trend-up"></i> Show Trending
              </button>
              <button className="btn btn-outline-primary explore-btns">
                <i class="fa-solid fa-arrow-right-arrow-left"></i> Show Latest
              </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
