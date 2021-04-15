import axios from 'axios';
import { PharmacyOrderstActionTypes } from '../actionTypes';

export const fetchPharmacyOrdersStart = () => ({
  type: PharmacyOrderstActionTypes.FITCH_DATA_START,
});

export const fetchPharmacyOrdersSuccess = (orders) => ({
  type: PharmacyOrderstActionTypes.FITCH_DATA_SUCCESS,
  orders,
});

export const fetchPharmacyOrdersFailure = (error) => ({
  type: PharmacyOrderstActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchPharmacyOrdersStartAsync = (appointment) => (dispatch) => {
  dispatch(fetchPharmacyOrdersStart());
  const token = localStorage.getItem('token');
  axios
    .post('http://localhost:5000/api/v1/order', appointment, {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    .then((res) => dispatch(fetchPharmacyOrdersSuccess(res.data)))
    .catch((error) => dispatch(fetchPharmacyOrdersFailure(error)));
};
