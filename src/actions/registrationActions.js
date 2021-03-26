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

export const fetchRegistrationStartAsync = () => (dispatch) => {
  dispatch(fetchRegistrationStart());
  axios
    .post('http://localhost:3000/users', { withCredentials: true })
    .then((res) => dispatch(fetchRegistrationStart(res.user)))
    .catch((error) => dispatch(fetchRegistrationFailure(error)));
};
