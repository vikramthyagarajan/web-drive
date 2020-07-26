
export const FolderActions = {
  SET_FOLDER_VIEW: 'SET_FOLDER_VIEW',

  GET_FOLDER: 'GET_FOLDER',
  GET_FOLDER_SUCCESS: 'GET_FOLDER_SUCCESS',
  GET_FOLDER_ERROR: 'GET_FOLDER_ERROR',

  CREATE_FOLDER: 'CREATE_FOLDER',
  CREATE_FOLDER_SUCCESS: 'CREATE_FOLDER_SUCCESS',
  CREATE_FOLDER_ERROR: 'CREATE_FOLDER_ERROR',

  DELETE_FOLDER: 'DELETE_FOLDER',
  DELETE_FOLDER_SUCCESS: 'DELETE_FOLDER_SUCCESS',
  DELETE_FOLDER_ERROR: 'DELETE_FOLDER_ERROR',

  CREATE_FILE: 'CREATE_FILE',
  CREATE_FILE_SUCCESS: 'CREATE_FILE_SUCCESS',
  CREATE_FILE_ERROR: 'CREATE_FILE_ERROR',

  DELETE_FILE: 'DELETE_FILE',
  DELETE_FILE_SUCCESS: 'DELETE_FILE_SUCCESS',
  DELETE_FILE_ERROR: 'DELETE_FILE_ERROR',

  SEARCH_ALL: 'SEARCH_ALL',
  SEARCH_ALL_SUCCESS: 'SEARCH_ALL_SUCCESS',
  SEARCH_ALL_ERROR: 'SEARCH_ALL_ERROR',

  MOVE_FILE: 'MOVE_FILE',
  MOVE_FILE_SUCCESS: 'MOVE_FILE_SUCCESS',
  MOVE_FILE_ERROR: 'SEARCH_FILE_ERROR',

  MOVE_FOLDER: 'MOVE_FOLDER',
  MOVE_FOLDER_SUCCESS: 'MOVE_FOLDER_SUCCESS',
  MOVE_FOLDER_ERROR: 'SEARCH_FOLDER_ERROR',

  SET_MOVE_ID: 'SET_MOVE_ID',
}

export const FolderCreators = {
  getFolder: (folderId) => ({type: FolderActions.GET_FOLDER, folderId}),
  getFolderSuccess: (folderId, folder) => ({type: FolderActions.GET_FOLDER_SUCCESS, folderId, folder}),
  getFolderError: (folderId, error) => ({type: FolderActions.GET_FOLDER_ERROR, folderId, error}),

  createFolder: (parentFolderId, name) => ({type: FolderActions.CREATE_FOLDER, parentFolderId, name}),
  createFolderSuccess: (parentFolderId, name, folder) => ({type: FolderActions.CREATE_FOLDER_SUCCESS, parentFolderId, name, folder}),
  createFolderError: (parentFolderId, name, error) => ({type: FolderActions.CREATE_FOLDER_ERROR, parentFolderId, name}),

  deleteFolder: (parentFolderId, folderId) => ({type: FolderActions.DELETE_FOLDER, parentFolderId, folderId}),
  deleteFolderSuccess: (parentFolderId, folderId) => ({type: FolderActions.DELETE_FOLDER_SUCCESS, parentFolderId, folderId}),
  deleteFolderError: (parentFolderId, folderId, error) => ({type: FolderActions.DELETE_FOLDER_ERROR, parentFolderId, folderId, error}),

  createFile: (parentFolderId, name, file) => ({type: FolderActions.CREATE_FILE, parentFolderId, name, file}),
  createFileSuccess: (parentFolderId, file) => ({type: FolderActions.CREATE_FILE_SUCCESS, parentFolderId, file}),
  createFileError: (parentFolderId, error) => ({type: FolderActions.CREATE_FILE_ERROR, parentFolderId, error}),

  deleteFile: (parentFolderId, fileId) => ({type: FolderActions.DELETE_FILE, parentFolderId, fileId}),
  deleteFileSuccess: (parentFolderId, fileId) => ({type: FolderActions.DELETE_FILE_SUCCESS, parentFolderId, fileId}),
  deleteFileError: (parentFolderId, fileId, error) => ({type: FolderActions.DELETE_FILE_ERROR, parentFolderId, fileId, error}),

  searchAll: (query) => ({type: FolderActions.SEARCH_ALL, query}),
  searchAllSuccess: (query, data) => ({type: FolderActions.SEARCH_ALL_SUCCESS, query, data}),
  searchAllError: (query, error) => ({type: FolderActions.SEARCH_ALL_ERROR, query, error}),

  moveFile: (fileId, parentFolderId, folderId) => ({type: FolderActions.MOVE_FILE, fileId, parentFolderId, folderId}),
  moveFileSuccess: (fileId, from, to, item) => ({type: FolderActions.MOVE_FILE_SUCCESS, fileId, from, to, item}),
  moveFileError: (fileId, parentFolderId, folderId, error) => ({type: FolderActions.MOVE_FILE_ERROR, fileId, parentFolderId, folderId, error}),

  moveFolder: (id, parentFolderId, folderId) => ({type: FolderActions.MOVE_FOLDER, id, parentFolderId, folderId}),
  moveFolderSuccess: (id, from, to, item) => ({type: FolderActions.MOVE_FOLDER_SUCCESS, id, from, to, item}),
  moveFolderError: (id, parentFolderId, folderId, error) => ({type: FolderActions.MOVE_FOLDER_ERROR, id, parentFolderId, folderId, error}),

  setMoveId: (id, moveType, parentFolderId) => ({type: FolderActions.SET_MOVE_ID, id, moveType, parentFolderId}),

  setFolderView: (folderView) => ({type: FolderActions.SET_FOLDER_VIEW, folderView}),
}