import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import doctorSpecialtyReducer from './doctors/doctorSpecialtyReducer';
import registrationReducer from './auth/registrationReducer';
import doctorShowReducer from './doctors/doctorShowReducer';
import DoctorAppointmentReducer from './appointments/doctorAppointmentReducer';
import NurseSpecialtyReducer from './nurses/nurseSpecialtyReducer';
import nurseShowReducer from './nurses/nurseShowReducer';
import NurseAppointmentReducer from './appointments/nurseAppointmentReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  doctorShow: doctorShowReducer,
  doctorSpecialty: doctorSpecialtyReducer,
  doctorAppointment: DoctorAppointmentReducer,
  nurseShow: nurseShowReducer,
  nurseSpecialty: NurseSpecialtyReducer,
  nurseAppointment: NurseAppointmentReducer,

});

export default rootReducer;
