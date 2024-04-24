import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="info-container">
        <div className="user-info-container">
          <h1>username</h1>
          <p>
            handle <span className="threads-info">threads.net</span>
          </p>
        </div>
        <div className="avatar-container">
          <img src="" alt="user avatar" />
        </div>
      </div>
      <p>bio</p>
      <div className="sub-info-container">
        <p className="sub-text">
          # of followers &#x2022; <a href="">user link</a>{" "}
        </p>
      </div>
      <button
        className="primary"
        onClick={() => navigator.clipboard.writeText("URL for user")}
      >
        Share Profile
      </button>
      <div className="button-container">
        <button>Threads</button>
        <button>Replies</button>
      </div>
    </header>
  );
};

export default Header;
