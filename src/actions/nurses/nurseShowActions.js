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

export const fetchNurseShowStartAsync = (id) => (dispatch) => {
  dispatch(fetchNurseShowStart());
  const token = localStorage.getItem('token');
  axios
    .get(`https://glacial-everglades-68014.herokuapp.com/api/v1/nurses/show/${id}`, {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchNurseShowSuccess(res.data)))
    .catch((error) => dispatch(fetchNurseShowFailure(error)));
};
