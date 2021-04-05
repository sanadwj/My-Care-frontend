import { RegistrationActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  registration: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const registrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegistrationActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case RegistrationActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        registration: action.registration,
        isFetching: false,
      };
    case RegistrationActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default registrationReducer;
