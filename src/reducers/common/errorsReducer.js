import { errorsActionTypes } from '../../actions/actionTypes';

const errorsReducer = (state = [], action) => {
  if (action.type === errorsActionTypes.FETCH_ERRORS) {
    return action.errors;
  }
  return state;
};

export default errorsReducer;
