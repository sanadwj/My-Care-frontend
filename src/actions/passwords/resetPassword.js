import axios from 'axios';
import { ResetPasswordActionTypes } from '../actionTypes';

export const fetchResetPasswordsStart = () => ({
  type: ResetPasswordActionTypes.FITCH_DATA_START,
});

export const fetchResetPasswordsSuccess = (reset) => ({
  type: ResetPasswordActionTypes.FITCH_DATA_SUCCESS,
  reset,
});

export const fetchResetPasswordsFailure = (error) => ({
  type: ResetPasswordActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchResetPasswordsStartAsync = (reset) => (dispatch) => {
  dispatch(fetchResetPasswordsStart());
  axios
    .post('https://glacial-everglades-68014.herokuapp.com/api/v1/reset', reset)
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchResetPasswordsSuccess(res.data)))
    .catch((error) => dispatch(fetchResetPasswordsFailure(error)));
};
