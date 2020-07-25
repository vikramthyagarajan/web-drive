import React from "react";

import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <div className="appName">Web <span className="branding">Drive</span></div>
        <div className="divider"></div>
      </div>
      <div className="folderStructure">
        <div className="list">
          <div className="listItem">Home</div>
        </div>
      </div>
      <div className="footer">
        <div className="actions">
          <button className="addButton">+</button>
          <button className="searchButton">?</button>
        </div>
      </div>
    </div>
  )
}