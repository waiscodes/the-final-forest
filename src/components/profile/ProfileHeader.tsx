import React from 'react'
import './profile-header.css'

const ProfileHeader = () => {
  return (
    <div className='profile-header'>
      <div>
        <div className="profile-pic"></div>
        <div>
          <h2>username</h2>
          <button>edit profile</button>
        </div>
      </div>
      <ul>
        <li>
          <div>0</div>
          films
        </li>
        <li>
          <div>0</div>
          this year
        </li>
        <li>
          <div>0</div>
          lists
        </li>
        <li>
          <div>0</div>
          following
        </li>
        <li>
          <div>0</div>
          followers
        </li>
      </ul>
    </div>
  )
}

export default ProfileHeader