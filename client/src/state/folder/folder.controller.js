import Request from '../../config/request';
import { FolderCreators } from './folder.actions';
import { callGetUser } from '../user/user.controller';

export const callGetFolder = (folderId) => {
  return (dispatch) => {
    console.log('calling folder', folderId);
    return Request.get(`folders/${folderId}/`)
      .then(data => dispatch(FolderCreators.getFolderSuccess(folderId, data)))
      .catch(er => dispatch(FolderCreators.getFolderError(folderId, er.toString())))
  }
}

export const callGetUserAndFolder = () => {
  return dispatch => {
    return dispatch(callGetUser())
      .then((action) => {
        console.log('user action is', action);
        if (action.id) {
          let folderId = action.home;
          return dispatch(callGetFolder(folderId))
        }
      })
  }
}

export const callCreateFolder = (parentFolderId, name) => {
  return dispatch => {
    dispatch(FolderCreators.createFolder(parentFolderId, name));

    return Request.postForm(`folders/${parentFolderId}/folders`, {name})
      .then(data => FolderCreators.createFolderSuccess(parentFolderId, name, data))
      .catch(e => FolderCreators.createFolderError(parentFolderId, name, e.toString()))
  }
}