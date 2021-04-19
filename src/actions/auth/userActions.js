import { setAuthUser, RegistrationActionTypes } from '../actionTypes';

export const fetchAuthUser = (authenticated) => ({
  type: setAuthUser.SET_AUTH_USER,
  authenticated,
});

export const fetchRegisteredUser = (registered) => ({
  type: RegistrationActionTypes.SET_REGISTERED_USER,
  registered,
});
