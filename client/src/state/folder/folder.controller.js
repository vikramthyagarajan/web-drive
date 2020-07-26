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
      .then(data => dispatch(FolderCreators.createFolderSuccess(parentFolderId, name, data)))
      .catch(e => dispatch(FolderCreators.createFolderError(parentFolderId, name, e.toString())))
  }
}

export const callCreateFile = (parentFolderId, name, file) => {
  return dispatch => {
    dispatch(FolderCreators.createFile(parentFolderId, name, file));

    return Request.postForm(`folders/${parentFolderId}/files`, {name, file})
      .then(data => dispatch(FolderCreators.createFileSuccess(parentFolderId, data)))
      .catch(e => dispatch(FolderCreators.createFileError(parentFolderId, e.toString())))
  }
}

export const callDeleteFolder = (parentFolderId, folderId) => {
  return dispatch => {
    dispatch(FolderCreators.deleteFolder(parentFolderId, folderId));

    return Request.delete(`folders/${folderId}`)
      .then(data => dispatch(FolderCreators.deleteFolderSuccess(parentFolderId, folderId)))
      .catch(e => dispatch(FolderCreators.deleteFolderError(parentFolderId, folderId, e.toString())))
  }
}

export const callDeleteFile = (parentFolderId, folderId) => {
  return dispatch => {
    dispatch(FolderCreators.deleteFile(parentFolderId, folderId));

    return Request.delete(`files/${folderId}`)
      .then(data => dispatch(FolderCreators.deleteFileSuccess(parentFolderId, folderId)))
      .catch(e => dispatch(FolderCreators.deleteFileError(parentFolderId, folderId, e.toString())))
  }
}

export const callSearchAll = (query) => {
  return dispatch => {
    dispatch(FolderCreators.searchAll(query));

    return Request.get('search', {query})
      .then(data => dispatch(FolderCreators.searchAllSuccess(query, data)))
      .catch(e => dispatch(FolderCreators.searchAllError(query, e.toString())))
  }
}

export const callSearchFolder = (query) => {
  return dispatch => {
    dispatch(FolderCreators.searchAll(query));

    return Request.get('search', {query, type: 'folder'})
      .then(data => dispatch(FolderCreators.searchAllSuccess(query, data)))
      .catch(e => dispatch(FolderCreators.searchAllError(query, e.toString())))
  }
}