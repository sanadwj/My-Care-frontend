import { DoctorSpecialtyActionTypes } from '../actions/actionTypes';


const INITIAL_STATE = {
  doctors: [],
  isFetching: false,
  errorMessage: undefined,
};

const doctorSpecialtyReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
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
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default doctorSpecialtyReducer;
