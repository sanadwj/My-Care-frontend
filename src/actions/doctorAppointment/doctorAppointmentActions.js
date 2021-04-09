import axios from 'axios';
import { DoctorAppointmentActionTypes } from '../actionTypes';

export const fetchDoctorAppointmentStart = () => ({
  type: DoctorAppointmentActionTypes.FITCH_DATA_START,
});

export const fetchDoctorAppointmentSuccess = (docAppointment) => ({
  type: DoctorAppointmentActionTypes.FITCH_DATA_SUCCESS,
  docAppointment,
});

export const fetchDoctorAppointmentFailure = (error) => ({
  type: DoctorAppointmentActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchDoctorAppointmentStartAsync = (appointment) => (dispatch) => {
  dispatch(fetchDoctorAppointmentStart());
  const token = localStorage.getItem('token');
  axios
    .post('http://localhost:5000/api/v1/create_doctor_appointment', appointment, {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchDoctorAppointmentSuccess(res.data)))
    .catch((error) => dispatch(fetchDoctorAppointmentFailure(error)));
};
