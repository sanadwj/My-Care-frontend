import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import doctorSpecialtyReducer from './doctors/doctorSpecialtyReducer';
import registrationReducer from './auth/registrationReducer';
import doctorShowReducer from './doctors/doctorShowReducer';
import DoctorAppointmentReducer from './appointments/doctorAppointmentReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  doctorShow: doctorShowReducer,
  doctorSpecialty: doctorSpecialtyReducer,
  doctorAppointment: DoctorAppointmentReducer,
});

export default rootReducer;
