/* eslint-disable arrow-parens */
import axios from 'axios';
import { AuthActionTypes } from './actionTypes';

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
  return dispatch => {
    dispatch(fetchAuthStart());
    axios
      .post('http://localhost:5000/users', user)
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchAuthSuccess(res.data.user), console.log(res.data.user)))
      .catch((error) => dispatch(fetchAuthFailure(error)));
  };
};