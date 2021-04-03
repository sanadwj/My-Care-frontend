import axios from 'axios';
import { NurseShowActionTypes } from '../actionTypes';

export const fetchNurseShowStart = () => ({
  type: NurseShowActionTypes.FITCH_DATA_START,
});

export const fetchNurseShowSuccess = (nurse) => ({
  type: NurseShowActionTypes.FITCH_DATA_SUCCESS,
  nurse,
});

export const fetchNurseShowFailure = (error) => ({
  type: NurseShowActionTypes.FETCH_DATA_FAILURE,
  error,
});
const token = localStorage.getItem('token');
// eslint-disable-next-line arrow-body-style
export const fetchNurseShowStartAsync = (id) => {
  return dispatch => {
    dispatch(fetchNurseShowStart());
    axios
      .get(`http://localhost:5000/api/v1/nurses/show/${id}`, {
        headers: {
          'Authorization': token
        },
      }, { withCredentials: false })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchNurseShowSuccess(res.data), console.log(res.data)))
      .catch((error) => dispatch(fetchNurseShowFailure(error)));
  };
};