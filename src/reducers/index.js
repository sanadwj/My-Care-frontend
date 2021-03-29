import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
});

export default rootReducer;
