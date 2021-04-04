import { PharmaciesShowtActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  pharmacies: [],
  isFetching: false,
  phErrorMessage: undefined,
};

const PharmacyShowReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
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
        phErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default PharmacyShowReducer;
