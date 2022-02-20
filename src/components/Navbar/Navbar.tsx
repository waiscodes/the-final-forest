import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className='main-navbar'>
        <div className='logo'>Letterboxd</div>
        <ul>
          <li>Username</li>
          <li>Lists</li>
          <li>Members</li>
          <li>Journal</li>
          <li>Icon</li>
          <li className='log-button'>Log</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar