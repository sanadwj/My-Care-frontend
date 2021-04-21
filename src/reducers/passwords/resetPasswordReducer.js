import { ResetPasswordActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  reset: [],
};

const ResetPasswordReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ResetPasswordActionTypes.SET_PASSWORD_RESET) {
    return action.reset;
  }
  return state;
};

export default ResetPasswordReducer;
