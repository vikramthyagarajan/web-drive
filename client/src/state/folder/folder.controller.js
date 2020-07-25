import Request from '../../config/request';
import History from '../../config/history';
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
        let path = History.location.pathname || '';
        let split = path.split("/");
        // if link starts with folders then load that as parent
        if (split[1] === 'folders') {
          let id = split[2];
          return dispatch(callGetFolder(id))
        }
        else if (action.id) {
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

export const callCreateFile = (parentFolderId, name, file) => {
  return dispatch => {
    dispatch(FolderCreators.createFile(parentFolderId, name, file));

    return Request.postForm(`folders/${parentFolderId}/files`, {name, file})
      .then(data => FolderCreators.createFileSuccess(parentFolderId, data))
      .catch(e => FolderCreators.createFileError(parentFolderId, e.toString()))
  }
}