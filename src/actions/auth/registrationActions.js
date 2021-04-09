import axios from 'axios';
import { RegistrationActionTypes } from '../actionTypes';

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

export const fetchRegistrationStartAsync = (user) => (dispatch) => {
  dispatch(fetchRegistrationStart());
  axios
    .post('https://glacial-everglades-68014.herokuapp.com/users', user)
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchRegistrationSuccess(res.data.user)))
    .catch((error) => dispatch(fetchRegistrationFailure(error)));
};
