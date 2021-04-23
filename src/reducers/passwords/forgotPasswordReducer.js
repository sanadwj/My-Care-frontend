import { forgotPasswordActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  status: [],
};

const ForgotPasswordReducer = (state = INITIAL_STATE, action) => {
  if (action.type === forgotPasswordActionTypes.SET_EMAIL_FORGOT) {
    return action.forgot;
  }
  return state;
};

export default ForgotPasswordReducer;
