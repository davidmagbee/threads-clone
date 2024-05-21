import { useState, useEffect } from "react";
import moment from "moment";
import {
  FaRegHeart,
  FaRegComment,
  FaRetweet,
  FaRegPaperPlane,
} from "react-icons/fa";

const Thread = ({ user, filteredThread, setOpenPopUp }) => {
  const timePassed = moment().startOf("day").fromNow(filteredThread.timestamp);

  // TODO: address error
  const handleClick = () => {
    setOpenPopUp(true);
  }

  const postLike = async() => {
    
    filteredThread.likes.push({user_uuid: user.user_uuid})
    await fetch(`http://localhost:3000/threads/${filteredThread.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filteredThread),
  })

  return (
    <article className="thread">
      <div className="text-container">
        <div>
          <div className="avatar-container">
            <img src={user.avatar} alt="user avatar" />
          </div>
          <div>
            <p>
              <strong>{user.handle}</strong>
            </p>
            <p>{filteredThread.text}</p>
          </div>
        </div>
        <p className="sub-text">{timePassed}</p>
      </div>
      <div className="icons">
        <FaRegHeart />
        <FaRegComment onClick={handleClick}/>
        <FaRetweet />
        <FaRegPaperPlane />
      </div>
      <p className="sub-text">
        <span onClick={handleClick}>Replies</span> &#x2022; <span>{filteredThread.likes.length} Likes</span>
      </p>
    </article>
  );
};

export default Thread;
