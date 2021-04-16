import { errorsActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  errors: [],
};

const errorsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === errorsActionTypes.FETCH_ERRORS) {
    return action.errors;
  }
  return state;
};

export default errorsReducer;