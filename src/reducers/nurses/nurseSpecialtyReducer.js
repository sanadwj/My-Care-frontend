import { NurseSpecialtyActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  specialty: [],
};

const NurseSpecialtyReducer = (state = INITIAL_STATE, action) => {
  if (action.type === NurseSpecialtyActionTypes.SET_NURSES_SPECIALTY) {
    return action.specialty;
  }
  return state;
};

export default NurseSpecialtyReducer;
