
export const FolderActions = {
  GET_FOLDER: 'GET_FOLDER',
  GET_FOLDER_SUCCESS: 'GET_FOLDER_SUCCESS',
  GET_FOLDER_ERROR: 'GET_FOLDER_ERROR',
}

export const FolderCreators = {
  getFolder: (folderId) => ({type: FolderActions.GET_FOLDER, folderId}),
  getFolderSuccess: (folderId, folder) => ({type: FolderActions.GET_FOLDER_SUCCESS, folderId, folder}),
  getFolderError: (folderId, error) => ({type: FolderActions.GET_FOLDER_ERROR, folderId, error}),
}