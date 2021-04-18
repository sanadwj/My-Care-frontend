import { DoctorSpecialtyActionTypes } from '../actionTypes';

const fetchDoctorSpecialty = (doctors) => ({
  type: DoctorSpecialtyActionTypes.SET_DOCTORS_SPECIALTY,
  doctors,
});

export default fetchDoctorSpecialty;