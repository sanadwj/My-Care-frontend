import axios from 'axios';
import { DoctorShowActionTypes } from '../actionTypes';

export const fetchDoctorShowStart = () => ({
  type: DoctorShowActionTypes.FITCH_DATA_START,
});

export const fetchDoctorShowSuccess = (doctor) => ({
  type: DoctorShowActionTypes.FITCH_DATA_SUCCESS,
  doctor,
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
      .get(`http://localhost:5000/api/v1/doctors/show/${id}`, {
        headers: {
          'Authorization': token
        },
      }, { withCredentials: false })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchDoctorShowSuccess(res.data), console.log(res.data)))
      .catch((error) => dispatch(fetchDoctorShowFailure(error)));
  };
};