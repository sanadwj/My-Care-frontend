import { GetNurseAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  getNurAppointment: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const GetNurseAppointmentReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case GetNurseAppointmentActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case GetNurseAppointmentActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        getNurAppointment: action.getNurAppointment,
        isFetching: false,
      };
    case GetNurseAppointmentActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default GetNurseAppointmentReducer;
