import { setAuthUser } from '../actionTypes';

const fetchAuthUser = (authenticated) => ({
  type: setAuthUser.SET_AUTH_USER,
  authenticated,
});

export default fetchAuthUser;
