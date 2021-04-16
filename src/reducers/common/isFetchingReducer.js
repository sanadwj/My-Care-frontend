import { isFetchingActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  fetching: false,
};

const isFetchingReducer = (state = INITIAL_STATE, action) => {
  if (action.type === isFetchingActionTypes.IS_FETCHING) {
    return action.fetching;
  }
  return state;
};

export default isFetchingReducer;