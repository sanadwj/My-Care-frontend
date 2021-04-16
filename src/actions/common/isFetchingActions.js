import { isFetchingActionTypes } from '../actionTypes';

const isFetching = (fetching) => ({
  type: isFetchingActionTypes.IS_FETCHING,
  fetching,
});

export default isFetching;
