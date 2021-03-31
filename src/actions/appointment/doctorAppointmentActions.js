import axios from 'axios';
import { DoctorAppointmentActionTypes } from '../actionTypes';

export const fetchDoctorAppointmentStart = () => ({
  type: DoctorAppointmentActionTypes.FITCH_DATA_START,
});

export const fetchDoctorAppointmentSuccess = (appointment) => ({
  type: DoctorAppointmentActionTypes.FITCH_DATA_SUCCESS,
  appointment,
});

export const fetchDoctorAppointmentFailure = (error) => ({
  type: DoctorAppointmentActionTypes.FETCH_DATA_FAILURE,
  error,
});
const token = localStorage.getItem('token');
// eslint-disable-next-line arrow-body-style
export const fetchDoctorAppointmentStartAsync = (appointment) => {
  return dispatch => {
    dispatch(fetchDoctorAppointmentStart());
    axios
      .post('http://localhost:5000/api/v1/create_doctor_appointment', appointment, {
        headers: {
          'Authorization': token
        },
      }, { withCredentials: false })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchDoctorAppointmentSuccess(res.data), console.log(res.data)))
      .catch((error) => dispatch(fetchDoctorAppointmentFailure(error)));
  };
};
