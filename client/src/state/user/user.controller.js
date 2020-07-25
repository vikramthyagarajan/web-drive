import Request from '../../config/request';
import { UserCreators } from './user.actions';

export const callGetUser = () => {
  return (dispatch) => {
    return Request.get('users/1')
      .then(data => dispatch(UserCreators.getUserSuccess(data.id, data.name, data.home)))
      .catch(er => dispatch(UserCreators.getUserError(er.name)))
  }
}