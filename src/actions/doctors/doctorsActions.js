import { DoctorSpecialtyActionTypes, DoctorShowActionTypes, DoctorAppointmentActionTypes, GetDoctorAppointmentActionTypes } from '../actionTypes';

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

export const doctorsAppointment = (appointments) => ({
  type: GetDoctorAppointmentActionTypes.GET_DOCTORS_APPOINTMENT,
  appointments,
});