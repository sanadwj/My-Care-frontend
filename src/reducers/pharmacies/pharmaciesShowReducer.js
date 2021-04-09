import { PharmaciesShowtActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  pharmacies: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const PharmacyShowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PharmaciesShowtActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case PharmaciesShowtActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        pharmacies: action.pharmacies,
        isFetching: false,
      };
    case PharmaciesShowtActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default PharmacyShowReducer;
