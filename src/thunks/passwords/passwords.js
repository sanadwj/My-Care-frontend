import { sendAuthorizedRequest } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import { fetchForgotPasswords, fetchResetPasswords } from '../../actions/passwords/passwordReset';

export const forgotPassword = (email) => async (dispatch) => {
  const path = 'api/v1/passwords';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('post', path, token, email);
    dispatch(fetchForgotPasswords({ forgot: res.data }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    dispatch(fetchErrors(error));
  }
};

export const resetPassword = (resetData) => async (dispatch) => {
  const path = `api/v1/passwords/${resetData}`;
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('patch', path, token, resetData);
    dispatch(fetchResetPasswords({ reset: res.data }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    dispatch(fetchErrors(error.status));
  }
};
