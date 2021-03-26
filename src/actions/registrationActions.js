/* eslint-disable arrow-parens */
import axios from 'axios';
import { RegistrationActionTypes } from './actionTypes';

export const fetchRegistrationStart = () => ({
  type: RegistrationActionTypes.FITCH_DATA_START,
});

export const fetchRegistrationSuccess = (registration) => ({
  type: RegistrationActionTypes.FITCH_DATA_SUCCESS,
  registration,
});

export const fetchRegistrationFailure = (error) => ({
  type: RegistrationActionTypes.FETCH_DATA_FAILURE,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchRegistrationStartAsync = (user) => {
  return dispatch => {
    dispatch(fetchRegistrationStart());
    axios
      .post('http://localhost:5000/users', user)
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchRegistrationSuccess(res.data.user), console.log(res.data.user)))
      .catch((error) => dispatch(fetchRegistrationFailure(error)));
  };
};
