import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import { AuthActionTypes } from '../actions/actionTypes';

import doctorSpecialtyReducer from './doctors/doctorSpecialtyReducer';
import registrationReducer from './auth/registrationReducer';
import doctorShowReducer from './doctors/doctorShowReducer';
import DoctorAppointmentReducer from './appointments/doctorAppointmentReducer';
import NurseSpecialtyReducer from './nurses/nurseSpecialtyReducer';
import nurseShowReducer from './nurses/nurseShowReducer';
import NurseAppointmentReducer from './appointments/nurseAppointmentReducer';
import PharmacyShowReducer from './pharmacies/pharmaciesShowReducer';
import PharmacyOrdersReducer from './pharmacies/pharmacyOrdersReducer';

const appReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  doctorShow: doctorShowReducer,
  doctorSpecialty: doctorSpecialtyReducer,
  doctorAppointment: DoctorAppointmentReducer,
  nurseShow: nurseShowReducer,
  nurseSpecialty: NurseSpecialtyReducer,
  nurseAppointment: NurseAppointmentReducer,
  pharmaciesShow: PharmacyShowReducer,
  pharmacyOrders: PharmacyOrdersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AuthActionTypes.FITCH_DATA_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
