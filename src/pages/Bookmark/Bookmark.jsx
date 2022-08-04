import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import Post from "../../components/Post/Post";
import "./Bookmark.css";

const Bookmark = () => {
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
              <i class="fa-solid fa-bookmark"></i> Bookmarks
            </button>

            <button className="navigationBtn">
              <i class="fa-solid fa-user"></i> Profile
            </button>
          </div>
        </div>

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
