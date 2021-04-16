/* eslint-disable no-param-reassign */
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
import isFetchingReducer from './common/isFetchingReducer';
import errorsReducer from './common/errorsReducer';

const appReducer = combineReducers({
  registrationReducer,
  authReducer,
  doctorShowReducer,
  doctorSpecialtyReducer,
  DoctorAppointmentReducer,
  GetDoctorAppointmentReducer,
  nurseShowReducer,
  NurseSpecialtyReducer,
  NurseAppointmentReducer,
  GetNurseAppointmentReducer,
  PharmacyShowReducer,
  PharmacyOrdersReducer,
  ResetPasswordReducer,
  ForgotPasswordReducer,
  isFetchingReducer,
  errorsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AuthActionTypes.FITCH_DATA_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
