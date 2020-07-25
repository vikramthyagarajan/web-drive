import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentFolder } from '../../state/folder/folder.selectors';
import { FolderCard, FileCard } from './Cards';
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
              return <FolderCard folder={fold} />
            })}
          </div>
        </div>
        {/* <div className="label">Files</div> */}
        <div className="list fileList">
          <div className="listScroll fileList">
            {files.map((file) => {
              return <FileCard file={file} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}