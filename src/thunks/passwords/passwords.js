import { sendAuthorizedRequest } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import { fetchForgotPasswords, fetchResetPasswords } from '../../actions/passwords/passwordReset';

export const forgotPassword = (email) => async (dispatch) => {
  const path = 'api/v1/forgot';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('post', path, token, email);
    dispatch(fetchForgotPasswords({ forgot: res.data }));
    console.log(res.data);
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error));
  }
};


export const resetPassword = (resetData) => async (dispatch) => {
  const path = 'api/v1/reset';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('post', path, token, resetData);
    dispatch(fetchResetPasswords({ reset: res.data }));
    console.log(res.data);
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error.status));
  }
};