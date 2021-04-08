import axios from 'axios';
import { ResetPasswordActionTypes } from '../actionTypes';

export const fetchResetPasswordsStart = () => ({
  type: ResetPasswordActionTypes.FITCH_DATA_START,
});

export const fetchResetPasswordsSuccess = (orders) => ({
  type: ResetPasswordActionTypes.FITCH_DATA_SUCCESS,
  orders,
});

export const fetchResetPasswordsFailure = (error) => ({
  type: ResetPasswordActionTypes.FETCH_DATA_FAILURE,
  error,
});
// eslint-disable-next-line arrow-body-style
export const fetchResetPasswordsStartAsync = (email) => (dispatch) => {
  dispatch(fetchResetPasswordsStart());
  axios
    .post('http://localhost:5000/api/v1/forgot', email)
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchResetPasswordsSuccess(res.data), console.log(res.data)))
    .catch((error) => dispatch(fetchResetPasswordsFailure(error)));
};
