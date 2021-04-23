import { setAuthUser } from '../../actions/actionTypes';

const INITIAL_STATE = {
  authenticated: false,
  data: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === setAuthUser.SET_AUTH_USER) {
    return action.authenticated;
  }
  return state;
};

export default authReducer;
