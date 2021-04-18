import axios from 'axios';
import { DoctorShowActionTypes } from '../actionTypes';

export const fetchDoctorShow = (doctor) => ({
  type: DoctorShowActionTypes.FITCH_DATA_SUCCESS,
  doctor,
});

export const fetchDoctorShowStartAsync = (id) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchDoctorShowStart());
  axios
    .get(`http://localhost:5000/api/v1/doctors/show/${id}`, {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchDoctorShowSuccess(res.data)))
    .catch((error) => dispatch(fetchDoctorShowFailure(error)));
};
