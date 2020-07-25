import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { callGetUserAndFolder } from '../state/folder/folder.controller';
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../components/MainView/MainView';
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
        <MainView />
      </div>
    </div>
  )
}