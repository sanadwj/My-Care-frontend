import { NurseSpecialtyActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  nurses: [],
  isFetching: false,
  ErrorMessage: undefined,
};

const NurseSpecialtyReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case NurseSpecialtyActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case NurseSpecialtyActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        nurses: action.nurses,
        isFetching: false,
      };
    case NurseSpecialtyActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default NurseSpecialtyReducer;
