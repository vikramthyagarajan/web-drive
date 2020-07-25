import { combineReducers } from 'redux'
import userReducer from './user/user.reducer';
import folderReducer from './folder/folder.reducer';

export const State = combineReducers({
  user: userReducer,
  folder: folderReducer
})