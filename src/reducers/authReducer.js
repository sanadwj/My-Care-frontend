import { AuthActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  login: [],
  isFetching: false,
  errorMessage: undefined,
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
        Auth: action.Auth,
        isFetching: false,
      };
    case AuthActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default authReducer;
