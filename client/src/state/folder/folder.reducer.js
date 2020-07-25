import cloneDeep from 'lodash/cloneDeep';

import { FolderActions } from './folder.actions';

const defaultState = {
  folderId: null,
  folderData: {
  }
}

export default function FolderReducer(state = defaultState, action) {
  switch (action.type) {
    case FolderActions.GET_FOLDER_SUCCESS:
      return {...state, folderId: action.folderId, folderData: action.folder};

    case FolderActions.CREATE_FOLDER_SUCCESS:
      if(state.folderId !== action.parentFolderId)
        return state;

      let newState = cloneDeep(state);
      newState.folderData.folders.push(action.folder);
      return newState;

    default:
      return state;
  }
}