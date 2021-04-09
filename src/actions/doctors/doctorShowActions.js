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

export const fetchDoctorShowStartAsync = (id) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchDoctorShowStart());
  axios
    .get(`https://glacial-everglades-68014.herokuapp.com/api/v1/doctors/show/${id}`, {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchDoctorShowSuccess(res.data)))
    .catch((error) => dispatch(fetchDoctorShowFailure(error)));
};
