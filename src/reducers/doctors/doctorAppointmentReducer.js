import { DoctorAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  appointment: []
};

const DoctorAppointmentReducer = (state = INITIAL_STATE, action) => {
  if (action.type === DoctorAppointmentActionTypes.SET_DOCTOR_APPOINTMENT) {
    return action.appointment;
  }
  return state;
};

export default DoctorAppointmentReducer;
