import axios from 'axios';
import { forgotPasswordActionTypes } from '../actionTypes';

export const fetchForgotPasswordsStart = () => ({
  type: forgotPasswordActionTypes.FITCH_DATA_START,
});

export const fetchForgotPasswordsSuccess = (orders) => ({
  type: forgotPasswordActionTypes.FITCH_DATA_SUCCESS,
  orders,
});

export const fetchForgotPasswordsFailure = (error) => ({
  type: forgotPasswordActionTypes.FETCH_DATA_FAILURE,
  error,
});
// eslint-disable-next-line arrow-body-style
export const fetchForgotPasswordsStartAsync = (email) => (dispatch) => {
  dispatch(fetchForgotPasswordsStart());
  axios
    .post('http://localhost:5000/api/v1/forgot', email)
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchForgotPasswordsSuccess(res.data), console.log(res.data)))
    .catch((error) => dispatch(fetchForgotPasswordsFailure(error)));
};
