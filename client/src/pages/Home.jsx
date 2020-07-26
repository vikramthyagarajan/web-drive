import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { callGetUserAndFolder, fetchFolderIfRequired } from '../state/folder/folder.controller';
import History from '../config/history';
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../components/MainView/MainView';
import SearchView from '../components/MainView/SearchView';
import './Home.styles.scss';

export default withRouter(function(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFolderIfRequired(props.location));
  }, [props.location])
  useEffect(() => {
    dispatch(callGetUserAndFolder());
  }, [dispatch])


  return (
    <div className="page homepage">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main-wrapper">
        <Switch>
          <Route path="/folders/:id">
            <MainView />
          </Route>
          <Route path="/search">
            <SearchView />
          </Route>
          <Route exact path="/">
            <MainView />
          </Route>
        </Switch>
      </div>
    </div>
  )
})