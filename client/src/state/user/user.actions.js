import Request from '../../config/request';

export const UserActions = {
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',
}

const UserCreators = {
  getUser: () => ({type: UserActions.GET_USER}),
  getUserSuccess: (id, name, home) => ({type: UserActions.GET_USER_SUCCESS, id, name, home}),
  getUserError: (error) => ({type: UserActions.GET_USER_ERROR, error}),
}

export const UserFunctions = {
  callGetUser: () => {
    return (dispatch) => {
      console.log('calling');
      return Request.get('users/1')
        .then(data => dispatch(UserCreators.getUserSuccess(data.id, data.name, data.home)))
        .catch(er => dispatch(UserCreators.getUserError(er.name)))
    }
  }
}