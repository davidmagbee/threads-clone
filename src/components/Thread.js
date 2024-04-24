import React from "react";
import {
  FaRegHeart,
  FaRegComment,
  FaRetweet,
  FaRegPaperPlane,
} from "react-icons/fa";

const Thread = () => {
  return (
    <article className="thread">
      <div className="text-container">
        <div>
          <div className="avatar-container">
            <img src="" alt="user avatar" />
          </div>
          <div>
            <p>
              <strong>HANDLE</strong>
            </p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <p className="sub-text">time</p>
      </div>
      <div className="icons">
        <FaRegHeart />
        <FaRegComment />
        <FaRetweet />
        <FaRegPaperPlane />
      </div>
      <p className="sub-text"><span>Replies</span> &#x2022; <span># Likes</span></p>
    </article>
  );
};

export default Thread;
