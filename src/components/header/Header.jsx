import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>

      <div className="right-section">
        <div className="notification">
          🔔
          <span className="badge">6</span>
        </div>

        <div className="language">
          <p>🇬🇧 <span>English</span></p>
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
          <div>
            <p className="name">Moni Roy</p>
            <p className="role">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;