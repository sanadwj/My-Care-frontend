import { combineReducers } from 'redux';
import authReducer from './authReducer';
import doctorSpecialtyReducer from './doctorSpecialtyReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  doctorSpecialty: doctorSpecialtyReducer,
});

export default rootReducer;
