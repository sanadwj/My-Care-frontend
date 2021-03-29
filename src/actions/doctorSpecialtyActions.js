/* eslint-disable arrow-parens */
import axios from 'axios';
import { DoctorSpecialtyActionTypes } from './actionTypes';

export const fetchDoctorSpecialtyStart = () => ({
  type: DoctorSpecialtyActionTypes.FITCH_DATA_START,
});

export const fetchDoctorSpecialtySuccess = (specialty) => ({
  type: DoctorSpecialtyActionTypes.FITCH_DATA_SUCCESS,
  specialty,
});

export const fetchDoctorSpecialtyFailure = (error) => ({
  type: DoctorSpecialtyActionTypes.FETCH_DATA_FAILURE,
  error,
});
const token = localStorage.getItem('token');
// eslint-disable-next-line arrow-body-style
export const fetchDoctorSpecialtyStartAsync = (specialty) => {
  return dispatch => {
    dispatch(fetchDoctorSpecialtyStart());
    axios
      .get(`http://localhost:5000/api/v1/doctors/${specialty}`, {
        headers: {
          'Authorization': token
        }
      })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchDoctorSpecialtySuccess(res.data), console.log(res.data.specialty)))
      .catch((error) => dispatch(fetchDoctorSpecialtyFailure(error)));
  };
};
