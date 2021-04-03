import { NurseAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  appointment: [],
  isFetching: false,
  nAppErrorMessage: undefined,
};

const NurseAppointmentReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case NurseAppointmentActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case NurseAppointmentActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        appointment: action.appointment,
        isFetching: false,
      };
    case NurseAppointmentActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        nAppErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default NurseAppointmentReducer;
