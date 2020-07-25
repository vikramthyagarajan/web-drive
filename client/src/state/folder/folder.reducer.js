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

    default:
      return state;
  }
}