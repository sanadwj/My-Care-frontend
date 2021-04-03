import { DoctorAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  appointment: [],
  isFetching: false,
  dAppErrorMessage: undefined,
};

const DoctorAppointmentReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
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
        dAppErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default DoctorAppointmentReducer;
