import React from 'react';
import { Loader } from 'semantic-ui-react';
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
  return (dispatch) => {
    dispatch(fetchAuthStart());
    <Loader />;
    axios
      .post('http://localhost:5000/api/v1/auth', user)
      // eslint-disable-next-line max-len
      .then((res) => {
        dispatch(fetchAuthSuccess(res.data));
        const { token } = res.data;
        localStorage.setItem('token', token);
      })
      .catch((error) => dispatch(fetchAuthFailure(error)));
  };
};
