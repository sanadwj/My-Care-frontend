import { PharmacyOrderstActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  pharmacyOrders: [],
  isFetching: false,
  phOErrorMessage: undefined,
};

const PharmacyOrdersReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case PharmacyOrderstActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case PharmacyOrderstActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        pharmacyOrders: action.pharmacyOrders,
        isFetching: false,
      };
    case PharmacyOrderstActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        phPErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default PharmacyOrdersReducer;
