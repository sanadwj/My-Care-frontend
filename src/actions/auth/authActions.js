import axios from 'axios';
import { AuthActionTypes } from '../actionTypes';

export const fetchAuthStart = () => ({
  type: AuthActionTypes.FITCH_DATA_START,
});

export const fetchAuthSuccess = (auth) => ({
  type: AuthActionTypes.FITCH_DATA_SUCCESS,
  auth,
});

export const fetchAuthFailure = (error) => ({
  type: AuthActionTypes.FETCH_DATA_FAILURE,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchAuthStartAsync = (user) => {
  return (dispatch) => {
    dispatch(fetchAuthStart());
    axios
      .post('http://localhost:5000/api/v1/auth', user, { withCredentials: false })
      // eslint-disable-next-line max-len
      .then((res) => {
        dispatch(fetchAuthSuccess(res.data));
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({ id: user.id, username: user.username }));
      })
      .catch((error) => dispatch(fetchAuthFailure(error)));
  };
};
