import { sendAuthorizedRequest } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import { fetchDoctorSpecialty, fetchDoctorShow, fetchDoctorAppointment, doctorsAppointment } from '../../actions/doctors/doctorsActions';

export const doctorsSpecialty = (specialty) => async (dispatch) => {
  const path = `api/v1/doctors-specialties/specialty/${specialty}`;
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(fetchDoctorSpecialty({ doctors: res.data.doctors }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
  }
};

export const doctorShow = (id) => async (dispatch) => {
  const path = `api/v1/doctors/${id}`;
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(fetchDoctorShow({ doctor: res.data }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error.response.status));
  }
};

export const doctorAppointment = (appointment) => async (dispatch) => {
  const path = 'api/v1/doctor_appointments';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('post', path, token, appointment);
    dispatch(fetchDoctorAppointment({ appointment: res }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error));
  }
};

export const getDoctorsAppointment = () => async (dispatch) => {
  const path = 'api/v1/doctor_appointments';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(doctorsAppointment({ appointments: res.data.appointments }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error));
  }
};