import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { callGetUserAndFolder } from '../state/folder/folder.controller';
import './Home.styles.scss';

export default function() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(callGetUserAndFolder());
  }, [])

  return (
    <div className="page homepage">
      <div className="sidebar-wrapper">
        Sidebar
      </div>
      <div className="main-wrapper">
        Main
      </div>
    </div>
  )
}