import { sendAuthorizedRequest } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import fetchDoctorSpecialty from '../../actions/doctors/doctorSpecialtyActions';


export const doctorsSpecialty = (specialty) => async (dispatch) => {
  console.log(specialty);
  const path = `api/v1/doctors/specialty/${specialty}`;
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(fetchDoctorSpecialty({ doctors: res.data.doctors }));
    console.log(res.data.doctors);
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    console.log(error.response);
  }
};