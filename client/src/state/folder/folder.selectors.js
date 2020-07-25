
export const getCurrentFolder = () => {
  return (state) => {
    return state.folder.folderData || {};
  }
}

export const getFolderView = () => {
  return (state) => {
    return state.folder.folderView || '';
  }
}