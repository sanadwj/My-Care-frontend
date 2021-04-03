import axios from 'axios';
import { NurseAppointmentActionTypes } from '../actionTypes';

export const fetchNurseAppointmentStart = () => ({
  type: NurseAppointmentActionTypes.FITCH_DATA_START,
});

export const fetchNurseAppointmentSuccess = (appointment) => ({
  type: NurseAppointmentActionTypes.FITCH_DATA_SUCCESS,
  appointment,
});

export const fetchNurseAppointmentFailure = (error) => ({
  type: NurseAppointmentActionTypes.FETCH_DATA_FAILURE,
  error,
});
const token = localStorage.getItem('token');
// eslint-disable-next-line arrow-body-style
export const fetchNurseAppointmentStartAsync = (appointment) => {
  return (dispatch) => {
    dispatch(fetchNurseAppointmentStart());
    axios
      .post('http://localhost:5000/api/v1/create_nurse_appointment', appointment, {
        headers: {
          Authorization: token,
        },
      }, { withCredentials: false })
      // eslint-disable-next-line max-len
      .then((res) => dispatch(fetchNurseAppointmentSuccess(res.data), console.log(res.data)))
      .catch((error) => dispatch(fetchNurseAppointmentFailure(error)));
  };
};
