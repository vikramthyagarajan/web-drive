import cloneDeep from 'lodash/cloneDeep';

import { FolderActions } from './folder.actions';

const defaultState = {
  folderId: null,
  folderView: 'list',
  folderData: {
  }
}

export default function FolderReducer(state = defaultState, action) {
  let newState;
  switch (action.type) {
    case FolderActions.GET_FOLDER_SUCCESS:
      return {...state, folderId: action.folderId, folderData: action.folder};

    case FolderActions.CREATE_FOLDER_SUCCESS:
      if(state.folderId !== action.parentFolderId)
        return state;

      newState = cloneDeep(state);
      newState.folderData.folders.push(action.folder);
      return newState;

    case FolderActions.CREATE_FILE_SUCCESS:
      if(state.folderId !== action.parentFolderId)
        return state;

      newState = cloneDeep(state);
      newState.folderData.files.push(action.file);
      return newState;
    
    case FolderActions.SET_FOLDER_VIEW:
      newState = cloneDeep(state);
      newState.folderView = action.folderView;
      return newState;

    default:
      return state;
  }
}