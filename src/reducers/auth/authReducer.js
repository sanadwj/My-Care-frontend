import { AuthActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  auth: [],
  isFetching: false,
  AuthErrorMessage: undefined,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        auth: action.auth,
        isFetching: false,
      };
    case AuthActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        AuthErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default authReducer;
