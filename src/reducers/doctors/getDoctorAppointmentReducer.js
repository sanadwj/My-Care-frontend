import { GetDoctorAppointmentActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  appointments: []
};

const GetDoctorAppointmentReducer = (state = INITIAL_STATE, action) => {
  if (action.type === GetDoctorAppointmentActionTypes.GET_DOCTORS_APPOINTMENT) {
    return action.appointments;
  }
  return state;
};

export default GetDoctorAppointmentReducer;
