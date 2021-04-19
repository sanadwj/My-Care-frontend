import { DoctorShowActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  doctor: [],
};

const doctorShowReducer = (state = INITIAL_STATE, action) => {
  if (action.type === DoctorShowActionTypes.SET_DOCTOR) {
    return action.doctor;
  }
  return state;
};

export default doctorShowReducer;
