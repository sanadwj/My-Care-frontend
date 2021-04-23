import { PharmacyOrderstActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  orders: [],
};

const PharmacyOrdersReducer = (state = INITIAL_STATE, action) => {
  if (action.type === PharmacyOrderstActionTypes.SET_PHARMACY_ORDER) {
    return action.orders;
  }
  return state;
};

export default PharmacyOrdersReducer;
