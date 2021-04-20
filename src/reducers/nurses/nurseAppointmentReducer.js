import { NurseAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  appointment: [],
};

const NurseAppointmentReducer = (state = INITIAL_STATE, action) => {
  if (action.type === NurseAppointmentActionTypes.SET_NURSE_APPOINTMENT) {
    return action.appointment;
  }
  return state;
};

export default NurseAppointmentReducer;
