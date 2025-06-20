import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="nav-left">
          <button className="menu-btn">☰</button>
          <span className="browse">Browse Categories</span>
        </div>

        <div className="nav-center">
          <span className="logo">Images<b>Bazaar</b></span>
        </div>

        <div className="nav-right">
          <span className="pricing">Pricing</span>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>

      <div className="search-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search the largest collection of Indian images"
          />
          <div className="divider" />
          <select className="search-select">
            <option>Images</option>
            <option>Videos</option>
            <option>Illustrations</option>
          </select>
          <div className="divider" />
          <div className="search-by-image">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10057/10057711.png"
              alt="Search by image"
              className="search-image-icon"
            />
            <span className="search-label">Search by image</span>
          </div>
        </div>
      </div>
    </div>
  );
}
