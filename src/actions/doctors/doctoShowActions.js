import axios from 'axios';
import { DoctorShowActionTypes } from '../actionTypes';

export const fetchDoctorShowStart = () => ({
  type: DoctorShowActionTypes.FITCH_DATA_START,
});

export const fetchDoctorShowSuccess = (doctors) => ({
  type: DoctorShowActionTypes.FITCH_DATA_SUCCESS,
  doctors,
});

export const fetchDoctorShowFailure = (error) => ({
  type: DoctorShowActionTypes.FETCH_DATA_FAILURE,
  error,
});
const token = localStorage.getItem('token');
// eslint-disable-next-line arrow-body-style
export const fetchDoctorShowStartAsync = (id) => {
  return dispatch => {
    dispatch(fetchDoctorShowStart());
    axios
      .get(`http://localhost:5000/api/v1/doctors/${id}`, {
        headers: {
          'Authorization': token
        },
      })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchDoctorShowSuccess(res.data.doctor), console.log(res.data.doctor)))
      .catch((error) => dispatch(fetchDoctorShowFailure(error)));
  };
};