import axios from 'axios';
import { GetDoctorAppointmentActionTypes } from '../actionTypes';

export const fetchGetDoctorAppointmentStart = () => ({
  type: GetDoctorAppointmentActionTypes.FITCH_DATA_START,
});

export const fetchGetDoctorAppointmentSuccess = (getDocAppointment) => ({
  type: GetDoctorAppointmentActionTypes.FITCH_DATA_SUCCESS,
  getDocAppointment,
});

export const fetchGetDoctorAppointmentFailure = (error) => ({
  type: GetDoctorAppointmentActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchGetDoctorAppointmentStartAsync = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchGetDoctorAppointmentStart());
  axios
    .get('http://localhost:5000/api/v1/doctor_appointments', {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchGetDoctorAppointmentSuccess(res.data), console.log(res.data)))
    .catch((error) => dispatch(fetchGetDoctorAppointmentFailure(error)));
};
