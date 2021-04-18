import { RegistrationActionTypes } from '../actionTypes';

const fetchRegisteredUser = (registered) => ({
  type: RegistrationActionTypes.SET_REGISTERED_USER,
  registered,
});

export default fetchRegisteredUser;
