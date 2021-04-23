import { sendUnauthenticatedRequest, setAuthorizationToken } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import { fetchAuthUser, fetchRegisteredUser } from '../../actions/auth/userActions';

export const logIn = (loginParams) => async (dispatch) => {
  const path = 'api/v1/authentication';
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendUnauthenticatedRequest('post', path, loginParams);
    const { token, user } = res.data;
    await localStorage.setItem('token', token);
    await localStorage.setItem('id', user.id);
    dispatch(
      fetchAuthUser({
        authenticated: true,
        data: user,
      }),
    );
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    dispatch(fetchErrors(error.response.data.error));
  }
};

export const register = (registerParams) => async (dispatch) => {
  const path = 'users';
  dispatch(isFetching({ fetching: true }));
  try {
    await sendUnauthenticatedRequest('post', path, registerParams);
    dispatch(fetchRegisteredUser({ registered: true }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(fetchRegisteredUser({ registered: false }));
    dispatch(isFetching({ fetching: false }));
    dispatch(fetchErrors(error.response.data.error));
  }
};

export const logOut = () => async (dispatch) => {
  setAuthorizationToken(false);
  await localStorage.clear();
  dispatch(
    fetchAuthUser({
      authenticated: false,
      data: {},
    }),
  );
};
