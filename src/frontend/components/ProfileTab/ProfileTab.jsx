import React from "react";
import "./ProfileTab.css";

const ProfileTab = ({ name, userName, includeFollowBtn }) => {
  return (
    <div className="ProfileTab">
      <img class="avatar" src="/assets/user/om.jpg" alt="avatar" />
      <div className="profileNameContainer">
        <p className="profileName"> {name} </p>
        <p className="profileUsername"> {userName} </p>
      </div>
      {includeFollowBtn ? <button className="beyouBtn">Follow +</button> : null}
    </div>
  );
};

export default ProfileTab;
