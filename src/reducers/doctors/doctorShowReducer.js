import { DoctorShowActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  doctor: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const doctorShowReducer = (state = INITIAL_STATE, action) => {
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
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default doctorShowReducer;
