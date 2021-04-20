import { GetNurseAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  appointments: [],
};

const GetNurseAppointmentReducer = (state = INITIAL_STATE, action) => {
  if (action.type === GetNurseAppointmentActionTypes.GET_NURSES_APPOINTMENT) {
    return action.appointments;
  }
  return state;
};

export default GetNurseAppointmentReducer;
