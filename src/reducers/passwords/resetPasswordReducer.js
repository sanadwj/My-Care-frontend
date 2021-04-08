import { ResetPasswordActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  status: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const ResetPasswordReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case ResetPasswordActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case ResetPasswordActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        status: action.status,
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
