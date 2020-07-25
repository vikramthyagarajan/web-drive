
export const FolderActions = {
  GET_FOLDER: 'GET_FOLDER',
  GET_FOLDER_SUCCESS: 'GET_FOLDER_SUCCESS',
  GET_FOLDER_ERROR: 'GET_FOLDER_ERROR',

  CREATE_FOLDER: 'CREATE_FOLDER',
  CREATE_FOLDER_SUCCESS: 'CREATE_FOLDER_SUCCESS',
  CREATE_FOLDER_ERROR: 'CREATE_FOLDER_ERROR',

  CREATE_FILE: 'CREATE_FILE',
  CREATE_FILE_SUCCESS: 'CREATE_FILE_SUCCESS',
  CREATE_FILE_ERROR: 'CREATE_FILE_ERROR',
}

export const FolderCreators = {
  getFolder: (folderId) => ({type: FolderActions.GET_FOLDER, folderId}),
  getFolderSuccess: (folderId, folder) => ({type: FolderActions.GET_FOLDER_SUCCESS, folderId, folder}),
  getFolderError: (folderId, error) => ({type: FolderActions.GET_FOLDER_ERROR, folderId, error}),

  createFolder: (parentFolderId, name) => ({type: FolderActions.CREATE_FOLDER, parentFolderId, name}),
  createFolderSuccess: (parentFolderId, name, folder) => ({type: FolderActions.CREATE_FOLDER_SUCCESS, parentFolderId, name, folder}),
  createFolderError: (parentFolderId, name, error) => ({type: FolderActions.CREATE_FOLDER_ERROR, parentFolderId, name}),

  createFile: (parentFolderId, name, file) => ({type: FolderActions.CREATE_FILE, parentFolderId, name, file}),
  createFileSuccess: (parentFolderId, file) => ({type: FolderActions.CREATE_FILE_SUCCESS, parentFolderId, file}),
  createFileError: (parentFolderId, error) => ({type: FolderActions.CREATE_FILE_ERROR, parentFolderId, error}),
}