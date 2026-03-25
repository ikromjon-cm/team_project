import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <span>Dash</span>Stack
      </h2>

      <ul className="menu">
        <li className="active">Dashboard</li>
        <li>Products</li>
        <li>Favorites</li>
        <li>Inbox</li>
        <li>Order Lists</li>
        <li>Product Stock</li>
      </ul>

      <p className="pages">PAGES</p>

      <ul className="menu">
        <li>Pricing</li>
        <li>Calender</li>
        <li>To-Do</li>
        <li>Contact</li>
        <li>Invoice</li>
        <li>UI Elements</li>
        <li>Team</li>
        <li>Table</li>
      </ul>

      <ul className="menu bottom">
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
