import { GetDoctorAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  getAppointment: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const GetDoctorAppointmentReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case GetDoctorAppointmentActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case GetDoctorAppointmentActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        getAppointment: action.getAppointment,
        isFetching: false,
      };
    case GetDoctorAppointmentActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default GetDoctorAppointmentReducer;
