import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

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
        <div className="folderHeader">
          <div className="folderName">{folder.name}</div>
          <div className="action add">
            <IconButton style={{background: '#1B53BD', color: 'inherit'}}>
              <AddIcon />
            </IconButton>
          </div>
          <div className="action search">
            <IconButton style={{background: '#1B53BD', color: 'inherit'}}>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
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