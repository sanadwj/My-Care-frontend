import { DoctorShowActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  doctor: [],
  isFetching: false,
  errorMessage: undefined,
};

const doctorSpecialtyReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case DoctorShowActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case DoctorShowActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        doctor: action.doctor,
        isFetching: false,
      };
    case DoctorShowActionTypes.FETCH_DATA_FAILURE:
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
