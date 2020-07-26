import cloneDeep from 'lodash/cloneDeep';

import { FolderActions } from './folder.actions';

const defaultState = {
  folderId: null,
  folderView: 'list',
  folderData: {
  },
  move: {
    id: null,
    type: ''
  },
  searchData: {
    files: [],
    folders: [],
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
      newState.folderView = 'list';
      newState.folderData.folders.push(action.folder);
      return newState;

    case FolderActions.CREATE_FILE_SUCCESS:
      if(state.folderId !== action.parentFolderId)
        return state;

      newState = cloneDeep(state);
      newState.folderView = 'list';
      newState.folderData.files.push(action.file);
      return newState;
    
    case FolderActions.SET_FOLDER_VIEW:
      newState = cloneDeep(state);
      newState.folderView = action.folderView;
      return newState;

    case FolderActions.DELETE_FILE_SUCCESS:
    case FolderActions.DELETE_FOLDER_SUCCESS:
      let fields = action.hasOwnProperty('folderId')? ['folders', 'folderId']: ['files', 'fileId'];
      newState = cloneDeep(state);
      newState.folderData[fields[0]] = newState.folderData[fields[0]].filter(a => a.id !== action[fields[1]]);
      return newState;

    case FolderActions.SEARCH_ALL_SUCCESS:
      return {...state, searchData: {files: action.data.files ||[], folders: action.data.folders || []}};

    case FolderActions.MOVE_FOLDER_SUCCESS:
    case FolderActions.MOVE_FILE_SUCCESS:
      newState = cloneDeep(state);
      newState.folderData.folders = action.from.folders;
      newState.folderData.files = action.from.files;
      return newState;

    case FolderActions.SET_MOVE_ID:
      return {...state, move: {id: action.id, type: action.moveType, parentFolderId: action.parentFolderId}};

    default:
      return state;
  }
}