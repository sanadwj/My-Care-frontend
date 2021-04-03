/* eslint-disable arrow-parens */
import axios from 'axios';
import { NurseSpecialtyActionTypes } from '../actionTypes';

export const fetchNurseSpecialtyStart = () => ({
  type: NurseSpecialtyActionTypes.FITCH_DATA_START,
});

export const fetchNurseSpecialtySuccess = (nurses) => ({
  type: NurseSpecialtyActionTypes.FITCH_DATA_SUCCESS,
  nurses,
});

export const fetchNurseSpecialtyFailure = (error) => ({
  type: NurseSpecialtyActionTypes.FETCH_DATA_FAILURE,
  error,
});
const token = localStorage.getItem('token');
// eslint-disable-next-line arrow-body-style
export const fetchNurseSpecialtyStartAsync = (specialty) => {
  return dispatch => {
    dispatch(fetchNurseSpecialtyStart());
    axios
      .get(`http://localhost:5000/api/v1/nurses/${specialty}`, {
        headers: {
          'Authorization': token
        },
      }, { withCredentials: false })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchNurseSpecialtySuccess(res.data.nurses), console.log(res.data.nurses)))
      .catch((error) => dispatch(fetchNurseSpecialtyFailure(error)));
  };
};