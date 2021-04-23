import { PharmaciesShowtActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  pharmacies: [],
};

const PharmaciesShowReducer = (state = INITIAL_STATE, action) => {
  if (action.type === PharmaciesShowtActionTypes.GET_PHARMACIES) {
    return action.pharmacies;
  }
  return state;
};

export default PharmaciesShowReducer;
