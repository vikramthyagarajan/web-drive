
export const getCurrentFolder = () => {
  return (state) => {
    return state.folder.folderData || {};
  }
}