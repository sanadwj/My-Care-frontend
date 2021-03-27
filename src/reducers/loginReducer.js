import { LoginActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  login: [],
  isFetching: false,
  errorMessage: undefined,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case LoginActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        login: action.login,
        isFetching: false,
      };
    case LoginActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
