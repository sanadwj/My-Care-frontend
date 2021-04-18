import { RegistrationActionTypes } from '../../actions/actionTypes';

const registrationReducer = (state = { registered: false }, action) => {
  if (action.type === RegistrationActionTypes.SET_REGISTERED_USER) {
    return action.registered;
  }
  return state;
};

export default registrationReducer;
