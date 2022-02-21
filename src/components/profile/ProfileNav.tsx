import React from "react";
import "./profile-nav.css";

const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <ul>
        <li>
          <span>Profile</span>
        </li>
        <li>
          <span>Activity</span>
        </li>
        <li>
          <span>Films</span>
        </li>
        <li>
          <span>Diary</span>
        </li>
        <li>
          <span>Reviews</span>
        </li>
        <li>
          <span>Watchlist</span>
        </li>
        <li>
          <span>Lists</span>
        </li>
        <li>
          <span>Likes</span>
        </li>
        <li>
          <span>Tags</span>
        </li>
        <li>
          <span>Network</span>
        </li>
        <li>
          <span>Invitations</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNav;
