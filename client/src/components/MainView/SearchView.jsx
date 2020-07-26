import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';

import { getCurrentFolder, getFolderView, getSearchData } from '../../state/folder/folder.selectors';
import { callSearchAll } from '../../state/folder/folder.controller';
import { FolderCreators } from '../../state/folder/folder.actions';
import FolderContents from './FolderContents';
import './MainView.scss';


const debounce = (fn, delay) => {
  let timer = null;
  return function() {
      const context = this,
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(context, args);
      }, delay);
  };  
}

export default function MainView() {
  let folder = useSelector(getCurrentFolder());
  let searchData = useSelector(getSearchData());
  let folderView = useSelector(getFolderView());
  let dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [searchFor, setSearchFor] = useState(search);

  useEffect(() => {
    console.log("Search:", searchFor);
    // Debounced search is here
    dispatch(callSearchAll(searchFor));
  }, [searchFor]);


  const fireChange = event => {
    const { keyCode } = event;
    if (keyCode === 13) {
        event.preventDefault();
        setSearchFor(search);
    }
  }

  const changeSearch = event => {
    const { value } = event.target;
    setSearch(value);
    debounceSetSearchFor(value);
  };

  const debounceSetSearchFor = useCallback(debounce(function(value) {
    setSearchFor(value);
  }, 250), []);


  return (
    <div className="mainView">
      <div className="header">
        <div className="folderHeader">
          <TextField autoFocus className="searchField" label="Query" 
            value={search}
            onKeyDown={fireChange}
            onChange={changeSearch} />
        </div>
      </div>
      <div className="mainContent">
        <FolderContents folder={searchData} />
      </div>
    </div>
  )
}