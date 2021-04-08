import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import { AuthActionTypes } from '../actions/actionTypes';
import doctorSpecialtyReducer from './doctors/doctorSpecialtyReducer';
import registrationReducer from './auth/registrationReducer';
import doctorShowReducer from './doctors/doctorShowReducer';
import DoctorAppointmentReducer from './doctorAppointments/doctorAppointmentReducer';
import NurseSpecialtyReducer from './nurses/nurseSpecialtyReducer';
import nurseShowReducer from './nurses/nurseShowReducer';
import NurseAppointmentReducer from './nurseAppointment/nurseAppointmentReducer';
import PharmacyShowReducer from './pharmacies/pharmaciesShowReducer';
import PharmacyOrdersReducer from './pharmacies/pharmacyOrdersReducer';
import GetDoctorAppointmentReducer from './doctorAppointments/getDoctorAppointmentReducer';
import GetNurseAppointmentReducer from './nurseAppointment/getNurseAppointmentReducer';
import ResetPasswordReducer from './passwords/resetPasswordReducer';
import ForgotPasswordReducer from './passwords/forgotPasswordReducer';

const appReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  doctorShow: doctorShowReducer,
  doctorSpecialty: doctorSpecialtyReducer,
  doctorAppointment: DoctorAppointmentReducer,
  getDoctorAppointment: GetDoctorAppointmentReducer,
  nurseShow: nurseShowReducer,
  nurseSpecialty: NurseSpecialtyReducer,
  nurseAppointment: NurseAppointmentReducer,
  getNurseAppointment: GetNurseAppointmentReducer,
  pharmaciesShow: PharmacyShowReducer,
  pharmacyOrders: PharmacyOrdersReducer,
  reset: ResetPasswordReducer,
  forgot: ForgotPasswordReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AuthActionTypes.FITCH_DATA_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
