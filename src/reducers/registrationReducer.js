import { RegistrationActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  registration: [],
  isFetching: false,
  errorMessage: undefined,
};

const registrationReducer = (state = INITIAL_STATE, action) => {
  console.log(state);

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
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default registrationReducer;
