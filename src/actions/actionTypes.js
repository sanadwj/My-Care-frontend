



const ResetPasswordActionTypes = {
  FITCH_DATA_START: 'FETCH_DATA_START',
  FITCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
};

const forgotPasswordActionTypes = {
  FITCH_DATA_START: 'FETCH_DATA_START',
  FITCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
};

const errorsActionTypes = {
  FETCH_ERRORS: 'FETCH_ERRORS',
};

const isFetchingActionTypes = {
  IS_FETCHING: 'IS_FETCHING',
};

const setAuthUser = {
  SET_AUTH_USER: 'SET_AUTH_USER',
};

const RegistrationActionTypes = {
  SET_REGISTERED_USER: 'SET_REGISTERED_USER',
};

const DoctorSpecialtyActionTypes = {
  SET_DOCTORS_SPECIALTY: 'SET_DOCTORS_SPECIALTY',
};

const DoctorShowActionTypes = {
  SET_DOCTOR: 'SET_DOCTOR',
};

const DoctorAppointmentActionTypes = {
  SET_DOCTOR_APPOINTMENT: 'SET_DOCTOR_APPOINTMENT',
};

const GetDoctorAppointmentActionTypes = {
  GET_DOCTORS_APPOINTMENT: 'GET_DOCTORS_APPOINTMENT',
};

const NurseSpecialtyActionTypes = {
  SET_NURSES_SPECIALTY: 'SET_NURSES_SPECIALTY',
};

const NurseShowActionTypes = {
  SET_NURSE: 'SET_NURSE',
};

const NurseAppointmentActionTypes = {
  SET_NURSE_APPOINTMENT: 'SET_NURSE_APPOINTMENT',
};

const GetNurseAppointmentActionTypes = {
  GET_NURSES_APPOINTMENT: 'GET_NURSES_APPOINTMENT',
};

const PharmaciesShowtActionTypes = {
  GET_PHARMACIES: 'GET_PHARMACIES',
};

const PharmacyOrderstActionTypes = {
  SET_PHARMACY_ORDER: 'SET_PHARMACY_ORDER',
};

export {
  RegistrationActionTypes,
  DoctorSpecialtyActionTypes,
  DoctorShowActionTypes,
  DoctorAppointmentActionTypes,
  NurseSpecialtyActionTypes,
  NurseShowActionTypes,
  NurseAppointmentActionTypes,
  PharmaciesShowtActionTypes,
  PharmacyOrderstActionTypes,
  GetDoctorAppointmentActionTypes,
  GetNurseAppointmentActionTypes,
  ResetPasswordActionTypes,
  forgotPasswordActionTypes,
  errorsActionTypes,
  isFetchingActionTypes,
  setAuthUser,
};
