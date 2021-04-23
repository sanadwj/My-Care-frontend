import { DoctorSpecialtyActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  specialty: [],
};

const doctorSpecialtyReducer = (state = INITIAL_STATE, action) => {
  if (action.type === DoctorSpecialtyActionTypes.SET_DOCTORS_SPECIALTY) {
    return action.doctors;
  }
  return state;
};

export default doctorSpecialtyReducer;
