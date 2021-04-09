import axios from 'axios';
import { GetNurseAppointmentActionTypes } from '../actionTypes';

export const fetchGetNurseAppointmentStart = () => ({
  type: GetNurseAppointmentActionTypes.FITCH_DATA_START,
});

export const fetchGetNurseAppointmentSuccess = (getNurAppointment) => ({
  type: GetNurseAppointmentActionTypes.FITCH_DATA_SUCCESS,
  getNurAppointment,
});

export const fetchGetNurseAppointmentFailure = (error) => ({
  type: GetNurseAppointmentActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchGetNurseAppointmentStartAsync = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchGetNurseAppointmentStart());
  axios
    .get('https://glacial-everglades-68014.herokuapp.com/api/v1/nurse_appointments', {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchGetNurseAppointmentSuccess(res.data)))
    .catch((error) => dispatch(fetchGetNurseAppointmentFailure(error)));
};
