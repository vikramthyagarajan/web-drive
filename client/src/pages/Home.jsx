import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UserFunctions } from '../state/user/user.actions';
import './Home.styles.scss';

export default function() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserFunctions.callGetUser());
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