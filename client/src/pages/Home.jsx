import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { callGetUserAndFolder } from '../state/folder/folder.controller';
import { getCurrentFolder } from '../state/folder/folder.selectors';
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../components/MainView/MainView';
import SearchView from '../components/MainView/SearchView';
import './Home.styles.scss';

export default function() {
  const dispatch = useDispatch();
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
          <Route>
            <MainView />
          </Route>
        </Switch>
      </div>
    </div>
  )
}