import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentFolder } from '../../state/folder/folder.selectors';
import './MainView.scss';

export default function MainView() {
  let folder = useSelector(getCurrentFolder());
  let folders = (folder.folders || []);
  let files = (folder.files || []);

  return (
    <div className="mainView">
      <div className="header">
        <div className="folderName">{folder.name}</div>
        <div className="divider"></div>
      </div>
      <div className="mainContent">
        {/* <div className="label">Folders</div> */}
        <div className="list folderList">
          <div className="listScroll folderList">
            {folders.map((fold) => {
              return (<div key={fold.id} className="card folderCard">{fold.name}</div>)
            })}
          </div>
        </div>
        {/* <div className="label">Files</div> */}
        <div className="list fileList">
          <div className="listScroll fileList">
            {folders.map((file) => {
              return <div key={file.id} className="card fileCard">{file.name}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}