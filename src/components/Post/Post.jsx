import React from "react";
import "./Post.css";
import ProfileTab from "../ProfileTab/ProfileTab";

const Post = () => {
  return (
    <div className="Post">
      <div className="postHeader">
        <ProfileTab
          name="Om Gaikwad"
          userName="OmGaikwad_"
          includeFollowBtn={false}
        />

        <i class="fa-solid fa-ellipsis fa-xl postEllipsis"></i>
      </div>

      <div className="postContentContainer">
        I have completed my 3 months internship as a React Native Developer at
        Super Sapiens Devlab working on a product called "Dbeats". Dbeats is an
        NFT market place and live streaming product based on web3. 🧵
      </div>

      <div className="postButtonsContainer">
        <button className="postButton">
          <i class="fa-regular fa-heart fa-xl postLikeBtnIcon"></i>
        </button>

        <button className="postButton">
          <i class="fa-regular fa-comment fa-xl"></i>
        </button>

        <button className="postButton">
          <i class="fa-regular fa-bookmark fa-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Post;
