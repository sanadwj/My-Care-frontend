import { DoctorSpecialtyActionTypes, DoctorShowActionTypes, DoctorAppointmentActionTypes } from '../actionTypes';

export const fetchDoctorSpecialty = (doctors) => ({
  type: DoctorSpecialtyActionTypes.SET_DOCTORS_SPECIALTY,
  doctors,
});

export const fetchDoctorShow = (doctor) => ({
  type: DoctorShowActionTypes.SET_DOCTOR,
  doctor,
});

export const fetchDoctorAppointment = (appointment) => ({
  type: DoctorAppointmentActionTypes.SET_DOCTOR_APPOINTMENT,
  appointment,
});
