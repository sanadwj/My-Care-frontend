import { PharmacyOrderstActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  orders: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const PharmacyOrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PharmacyOrderstActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case PharmacyOrderstActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        isFetching: false,
      };
    case PharmacyOrderstActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default PharmacyOrdersReducer;
