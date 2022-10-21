import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavigationTab from "../../components/NavigationTab/NavigationTab";
import Post from "../../components/Post/Post";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import "./MyProfile.css";

const MyProfile = () => {
  return (
    <div className="MyProfile">
      <Navbar />

      <div className="homeContainer">
        <NavigationTab />

        <div className="feed">
          <div className="myProfileBioContainer">
            <div>
              <img
                className="avatar bioProfileImg"
                src="/assets/user/om.jpg"
                alt="avatar"
              />
            </div>
            <div className="myBioContainer">
              <div>
                <h2>Om Gaikwad</h2>
                <p className="profileUsername">@OmGaikwad_</p>
              </div>
              <p className="bioContent">writing code && lifting weights 🚀</p>
              <div className="bioLinkContainer">
                <i class="fa-solid fa-link"></i>
                <a href="https://peerlist.io/omgaikwad" className="bioLink">
                  https://peerlist.io/omgaikwad
                </a>
              </div>
              <div className="followAndFollowingContainer">
                <div className="followingContainer">
                  <p>4</p>
                  <p className="greyText">Following</p>
                </div>
                <div className="followerContanier">
                  <p>2</p>
                  <p className="greyText">Followers</p>
                </div>
              </div>
            </div>

            <div className="editBioBtnContainer">
              <button className="editBioBtn btn btn-outline-primary">
                Edit
              </button>
            </div>
          </div>
          <div className="expoloreFeedContainer">
            <Post />
            <Post />
          </div>
        </div>

        <div className="searchContainer">
          <div className="followSuggestion">
            <div className="whoToFollowHeading">
              <p>Suggested</p>
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

export default MyProfile;
