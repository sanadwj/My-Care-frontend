import { ResetPasswordActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  reset: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const ResetPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ResetPasswordActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case ResetPasswordActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        reset: action.reset,
        isFetching: false,
      };
    case ResetPasswordActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default ResetPasswordReducer;
