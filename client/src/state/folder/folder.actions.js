
export const FolderActions = {
  GET_FOLDER: 'GET_FOLDER',
  GET_FOLDER_SUCCESS: 'GET_FOLDER_SUCCESS',
  GET_FOLDER_ERROR: 'GET_FOLDER_ERROR',

  CREATE_FOLDER: 'CREATE_FOLDER',
  CREATE_FOLDER_SUCCESS: 'CREATE_FOLDER_SUCCESS',
  CREATE_FOLDER_ERROR: 'CREATE_FOLDER_ERROR',
}

export const FolderCreators = {
  getFolder: (folderId) => ({type: FolderActions.GET_FOLDER, folderId}),
  getFolderSuccess: (folderId, folder) => ({type: FolderActions.GET_FOLDER_SUCCESS, folderId, folder}),
  getFolderError: (folderId, error) => ({type: FolderActions.GET_FOLDER_ERROR, folderId, error}),

  createFolder: (parentFolderId, name) => ({type: FolderActions.CREATE_FOLDER, parentFolderId, name}),
  createFolderSuccess: (parentFolderId, name, folder) => ({type: FolderActions.CREATE_FOLDER_SUCCESS, parentFolderId, name, folder}),
  createFolderError: (parentFolderId, name, error) => ({type: FolderActions.CREATE_FOLDER_ERROR, parentFolderId, name}),
}