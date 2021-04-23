import { errorsActionTypes } from '../actionTypes';

const fetchErrors = (errors) => ({
  type: errorsActionTypes.FETCH_ERRORS,
  errors,
});

export default fetchErrors;
