import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <span>Dash</span>Stack
      </h2>

      <ul className="menu">
        <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Dashboard</NavLink></li>
        <li><NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>Products</NavLink></li>
        <li><NavLink to="/favorites" className={({isActive}) => isActive ? "active" : ""}>Favorites</NavLink></li>
        <li><NavLink to="/inbox" className={({isActive}) => isActive ? "active" : ""}>Inbox</NavLink></li>
        <li><NavLink to="/order-lists" className={({isActive}) => isActive ? "active" : ""}>Order Lists</NavLink></li>
        <li><NavLink to="/product-stock" className={({isActive}) => isActive ? "active" : ""}>Product Stock</NavLink></li>
      </ul>

      <p className="pages">PAGES</p>

      <ul className="menu">
        <li><NavLink to="/pricing" className={({isActive}) => isActive ? "active" : ""}>Pricing</NavLink></li>
        <li><NavLink to="/calendar" className={({isActive}) => isActive ? "active" : ""}>Calender</NavLink></li>
        <li><NavLink to="/todo" className={({isActive}) => isActive ? "active" : ""}>To-Do</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
        <li><NavLink to="/invoice" className={({isActive}) => isActive ? "active" : ""}>Invoice</NavLink></li>
        <li><NavLink to="/ui-elements" className={({isActive}) => isActive ? "active" : ""}>UI Elements</NavLink></li>
        <li><NavLink to="/team" className={({isActive}) => isActive ? "active" : ""}>Team</NavLink></li>
        <li><NavLink to="/table" className={({isActive}) => isActive ? "active" : ""}>Table</NavLink></li>
      </ul>

      <ul className="menu bottom">
        <li><NavLink to="/settings" className={({isActive}) => isActive ? "active" : ""}>Settings</NavLink></li>
        <li><NavLink to="/logout" className={({isActive}) => isActive ? "active" : ""}>Logout</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
