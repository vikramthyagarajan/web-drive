import React from 'react';

export default function MainView() {
  return (
    <div className="mainView">
      <div className="header">
        <div className="folderName">Folder</div>
        <div className="divider"></div>
      </div>
      <div className="mainContent">
        <div className="label">Folders</div>
        <div className="folderList">
          <div className="card folderCard">Folder</div>
        </div>
        <div className="label">Files</div>
        <div className="fileList">
          <div className="card fileCard">File</div>
        </div>
      </div>
    </div>
  )
}