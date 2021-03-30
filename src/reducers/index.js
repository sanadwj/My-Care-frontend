import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import doctorSpecialtyReducer from './doctors/doctorSpecialtyReducer';
import registrationReducer from './auth/registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  doctorSpecialty: doctorSpecialtyReducer,
});

export default rootReducer;
