import axios from 'axios';
import { forgotPasswordActionTypes } from '../actionTypes';

export const fetchForgotPasswordsStart = () => ({
  type: forgotPasswordActionTypes.FITCH_DATA_START,
});

export const fetchForgotPasswordsSuccess = (status) => ({
  type: forgotPasswordActionTypes.FITCH_DATA_SUCCESS,
  status,
});

export const fetchForgotPasswordsFailure = (error) => ({
  type: forgotPasswordActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchForgotPasswordsStartAsync = (email) => (dispatch) => {
  dispatch(fetchForgotPasswordsStart());
  axios
    .post('https://glacial-everglades-68014.herokuapp.com/api/v1/forgot', email)
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchForgotPasswordsSuccess(res.data)))
    .catch((error) => dispatch(fetchForgotPasswordsFailure(error)));
};
