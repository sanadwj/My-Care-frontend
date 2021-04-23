import { PharmaciesShowtActionTypes, PharmacyOrderstActionTypes } from '../actionTypes';

export const fetchPharmaciesShow = (pharmacies) => ({
  type: PharmaciesShowtActionTypes.GET_PHARMACIES,
  pharmacies,
});

export const fetchPharmacyOrders = (orders) => ({
  type: PharmacyOrderstActionTypes.SET_PHARMACY_ORDER,
  orders,
});
