import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import { getCurrentFolder, getFolderView } from '../../state/folder/folder.selectors';
import { FolderCreators } from '../../state/folder/folder.actions';
import FolderContents from './FolderContents';
import AddForm from './AddForm';
import './MainView.scss';

export default function MainView() {
  let folder = useSelector(getCurrentFolder());
  let folderView = useSelector(getFolderView());
  let dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(FolderCreators.setFolderView('add'));
  }

  return (
    <div className="mainView">
      <div className="header">
        <div className="folderHeader">
          <div className="folderName">{folder.name}</div>
          <div className={"action add " + (folderView == 'list'? 'show': '')}>
            <IconButton style={{background: '#1B53BD', color: 'inherit'}} onClick={handleAdd}>
              <AddIcon />
            </IconButton>
          </div>
          <div className={"action search " + (folderView === 'list'? 'show': '')}>
            <IconButton style={{background: '#1B53BD', color: 'inherit'}}>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="divider"></div>
      </div>
      <div className="mainContent">
        {
          folderView === 'list'?
            <FolderContents folder={folder} />
            : <AddForm folder={folder} />
        }
      </div>
    </div>
  )
}