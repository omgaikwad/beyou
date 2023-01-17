import React from "react";
import "./CreatePost.css";
import ProfileTab from "../../components/ProfileTab/ProfileTab";

const CreatePost = () => {
  return (
    <div className="CreatePost">
      <div>
        <ProfileTab
          name="Om Gaikwad"
          userName="OmGaikwad_"
          includeFollowBtn={false}
        />
      </div>

      <div className="inputContainer">
        <textarea
          className="postTextarea"
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="What's Happening?"
        ></textarea>
        <button className="btn btn-primary postBtn">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
