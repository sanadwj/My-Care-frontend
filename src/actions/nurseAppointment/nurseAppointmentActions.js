import axios from 'axios';
import { NurseAppointmentActionTypes } from '../actionTypes';

export const fetchNurseAppointmentStart = () => ({
  type: NurseAppointmentActionTypes.FITCH_DATA_START,
});

export const fetchNurseAppointmentSuccess = (nurAppointment) => ({
  type: NurseAppointmentActionTypes.FITCH_DATA_SUCCESS,
  nurAppointment,
});

export const fetchNurseAppointmentFailure = (error) => ({
  type: NurseAppointmentActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchNurseAppointmentStartAsync = (appointment) => (dispatch) => {
  dispatch(fetchNurseAppointmentStart());
  const token = localStorage.getItem('token');
  axios
    .post('http://localhost:5000/api/v1/create_nurse_appointment', appointment, {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchNurseAppointmentSuccess(res.data)))
    .catch((error) => dispatch(fetchNurseAppointmentFailure(error)));
};
