import { UserActions } from './user.actions';

const defaultState = {
  currentUser: null,
  id: null,
  home: null
}

export default function UserReducer (state = defaultState, action) {
  switch (action.type) {
    case UserActions.GET_USER_SUCCESS:
      return {...defaultState, id: action.id, home: action.home, currentUser: action.id};

    default:
      return state;
  }
}