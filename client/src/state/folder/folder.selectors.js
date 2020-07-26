import History from '../../config/history';

export const getCurrentFolder = () => {
  return (state) => {
    return state.folder.folderData || {};
  }
}

export const getSearchData = () => {
  return state => {
    return state.folder.searchData || {};
  }
}

export const getFolderView = () => {
  return (state) => {
    return state.folder.folderView || '';
  }
}

export const getHistory = () => {
  return state => {
    return History.location;
  }
}