import { sendUnauthenticatedRequest, sendAuthorizedRequest, setAuthorizationToken } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import fetchAuthUser from '../../actions/auth/userActions';

const logIn = (loginParams) => async (dispatch) => {
  const path = 'api/v1/authentication';
  dispatch(isFetching({
    fetching: true,
  }));
  try {
    const res = await sendUnauthenticatedRequest('post', path, loginParams);
    const { token, user } = res.data;
    await localStorage.setItem('token', token);
    dispatch(
      fetchAuthUser({
        authenticated: true,
        data: user,
      }),
    );
  } catch (error) {
    dispatch(fetchErrors(error));
  }
};

export default logIn;