import { DoctorSpecialtyActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  doctors: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const doctorSpecialtyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DoctorSpecialtyActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case DoctorSpecialtyActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        doctors: action.doctors,
        isFetching: false,
      };
    case DoctorSpecialtyActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default doctorSpecialtyReducer;
