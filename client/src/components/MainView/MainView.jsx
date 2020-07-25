import React from 'react';

import './MainView.scss';

export default function MainView() {
  return (
    <div className="mainView">
      <div className="header">
        <div className="folderName">Folder Name</div>
        <div className="divider"></div>
      </div>
      <div className="mainContent">
        {/* <div className="label">Folders</div> */}
        <div className="list folderList">
          <div className="listScroll folderList">
            <div className="card folderCard">Folder</div>
          </div>
        </div>
        {/* <div className="label">Files</div> */}
        <div className="list fileList">
          <div className="listScroll fileList">
            <div className="card fileCard">File</div>
          </div>
        </div>
      </div>
    </div>
  )
}