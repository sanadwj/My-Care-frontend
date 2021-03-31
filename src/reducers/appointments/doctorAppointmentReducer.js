import { DoctorAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  registration: [],
  isFetching: false,
  errorMessage: undefined,
};

const DoctorAppointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DoctorAppointmentActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case DoctorAppointmentActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        appointment: action.appointment,
        isFetching: false,
      };
    case DoctorAppointmentActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default DoctorAppointmentReducer;
