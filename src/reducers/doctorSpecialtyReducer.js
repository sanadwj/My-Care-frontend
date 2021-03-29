import { DoctorSpecialtyActionTypes } from '../actions/actionTypes';


const INITIAL_STATE = {
  specialty: [],
  isFetching: false,
  errorMessage: undefined,
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
        specialty: action.specialty,
        isFetching: false,
      };
    case DoctorSpecialtyActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default doctorSpecialtyReducer;
