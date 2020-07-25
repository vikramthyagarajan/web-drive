export const UserActions = {
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',
}

export const UserCreators = {
  getUser: () => ({type: UserActions.GET_USER}),
  getUserSuccess: (id, name, home) => ({type: UserActions.GET_USER_SUCCESS, id, name, home}),
  getUserError: (error) => ({type: UserActions.GET_USER_ERROR, error}),
}