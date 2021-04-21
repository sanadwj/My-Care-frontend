import { sendAuthorizedRequest } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import { fetchNurseSpecialty, fetchNurseShow, fetchNurseAppointment, nursesAppointment } from '../../actions/nurses/nursesActions';

export const nursesSpecialty = (specialty) => async (dispatch) => {
  const path = `api/v1/nurses-specialties/specialty/${specialty}`;
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(fetchNurseSpecialty({ specialty: res.data.nurses }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
  }
};

export const nurseShow = (id) => async (dispatch) => {
  const path = `api/v1/nurses/${id}`;
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(fetchNurseShow({ nurse: res.data }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error.response));
  }
};

export const nurseAppointment = (appointment) => async (dispatch) => {
  const path = 'api/v1/nurse_appointments';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('post', path, token, appointment);
    dispatch(fetchNurseAppointment({ appointment: res }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error));
  }
};

export const getNursesAppointment = () => async (dispatch) => {
  const path = 'api/v1/nurse_appointments';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(nursesAppointment({ appointments: res.data.appointments }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    return dispatch(fetchErrors(error));
  }
};