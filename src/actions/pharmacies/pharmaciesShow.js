import axios from 'axios';
import { PharmaciesShowtActionTypes } from '../actionTypes';

export const fetchPharmaciesShowStart = () => ({
  type: PharmaciesShowtActionTypes.FITCH_DATA_START,
});

export const fetchPharmaciesShowSuccess = (pharmacies) => ({
  type: PharmaciesShowtActionTypes.FITCH_DATA_SUCCESS,
  pharmacies,
});

export const fetchPharmaciesShowFailure = (error) => ({
  type: PharmaciesShowtActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchPharmaciesShowStartAsync = () => (dispatch) => {
  dispatch(fetchPharmaciesShowStart());
  const token = localStorage.getItem('token');
  axios
    .get('http://localhost:5000/api/v1/pharmacies', {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    // eslint-disable-next-line max-len
    .then((res) => dispatch(fetchPharmaciesShowSuccess(res.data), console.log(res.data)))
    .catch((error) => dispatch(fetchPharmaciesShowFailure(error)));
};
