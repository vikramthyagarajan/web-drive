import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import { getCurrentFolder } from '../../state/folder/folder.selectors';
import FolderContents from './FolderContents';
import './MainView.scss';

export default function MainView() {
  let folder = useSelector(getCurrentFolder());

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
        <FolderContents folder={folder} />
      </div>
    </div>
  )
}