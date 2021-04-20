import { NurseSpecialtyActionTypes, NurseShowActionTypes, NurseAppointmentActionTypes, GetNurseAppointmentActionTypes } from '../actionTypes';

export const fetchNurseSpecialty = (specialty) => ({
  type: NurseSpecialtyActionTypes.SET_NURSES_SPECIALTY,
  specialty,
});

export const fetchNurseShow = (nurse) => ({
  type: NurseShowActionTypes.SET_NURSE,
  nurse,
});

export const fetchNurseAppointment = (appointment) => ({
  type: NurseAppointmentActionTypes.SET_NURSE_APPOINTMENT,
  appointment,
});

export const nursesAppointment = (appointments) => ({
  type: GetNurseAppointmentActionTypes.GET_NURSES_APPOINTMENT,
  appointments,
});
