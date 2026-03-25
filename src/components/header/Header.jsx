import React from 'react';
import './Header.css';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M11 4a7 7 0 1 0 4.47 12.38l3.07 3.07a.75.75 0 1 0 1.06-1.06l-3.07-3.07A7 7 0 0 0 11 4Zm0 1.5A5.5 5.5 0 1 1 5.5 11 5.51 5.51 0 0 1 11 5.5Z"
      fill="currentColor"
    />
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M12 3.5a4.5 4.5 0 0 0-4.5 4.5v2.2c0 .72-.29 1.41-.8 1.92l-1.2 1.2a1 1 0 0 0 .7 1.7h12a1 1 0 0 0 .7-1.7l-1.2-1.2a2.7 2.7 0 0 1-.8-1.92V8a4.5 4.5 0 0 0-4.5-4.5Zm0 17a2.25 2.25 0 0 0 2.12-1.5h-4.24A2.25 2.25 0 0 0 12 20.5Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M7.5 9.25a.75.75 0 0 1 1.06 0L12 12.69l3.44-3.44a.75.75 0 1 1 1.06 1.06l-3.97 3.97a.75.75 0 0 1-1.06 0L7.5 10.31a.75.75 0 0 1 0-1.06Z"
      fill="currentColor"
    />
  </svg>
);

function Header() {
  return (
    <header className="navbar">
      <div className="searchbox">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="rightsec">
        <button type="button" className="iconbtn notification" aria-label="Notifications">
          <BellIcon />
          <span className="badge">6</span>
        </button>

        <button type="button" className="language">
          <span className="languagedot" />
          <span>English</span>
          <ChevronIcon />
        </button>

        <button type="button" className="profile">
          <img src="https://i.pravatar.cc/40" alt="Moni Roy" />
          <div>
            <p className="name">Moni Roy</p>
            <p className="role">Admin</p>
          </div>
          <ChevronIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
