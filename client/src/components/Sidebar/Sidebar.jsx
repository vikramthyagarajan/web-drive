import React from "react";
import { useSelector } from 'react-redux';

import { getCurrentFolder } from '../../state/folder/folder.selectors';
import './Sidebar.scss';

export default function Sidebar() {
  let folder = useSelector(getCurrentFolder()) || {};
  let tree = folder.tree || [];

  return (
    <div className="sidebar">
      <div className="header">
        <div className="appName">Web <span className="branding">Drive</span></div>
        <div className="divider"></div>
      </div>
      <div className="folderStructure">
        <div className="list">
          {
            tree.map((parent) => {
              return (<div className={"listItem " + (folder.id === parent.id? "current": "")}>{parent.name}</div>)
            })
          }

        </div>
      </div>
      {/* <div className="footer">
        <div className="actions">
          <button className="addButton">+</button>
          <button className="searchButton">?</button>
        </div>
      </div> */}
    </div>
  )
}