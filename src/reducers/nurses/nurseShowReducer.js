import { NurseShowActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  nurse: [],
};

const nurseShowReducer = (state = INITIAL_STATE, action) => {
  if (action.type === NurseShowActionTypes.SET_NURSE) {
    return action.nurse;
  }
  return state;
};

export default nurseShowReducer;
