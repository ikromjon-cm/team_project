import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <div className="appshell">
      <Sidebar />
      <div className="appmain">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
