import { NurseShowActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  nurse: [],
  isFetching: false,
  dShowErrorMessage: undefined,
};

const nurseShowReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case NurseShowActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case NurseShowActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        nurse: action.nurse,
        isFetching: false,
      };
    case NurseShowActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        NShowErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default nurseShowReducer;
