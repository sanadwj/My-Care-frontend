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
    .get('https://glacial-everglades-68014.herokuapp.com/api/v1/pharmacies', {
      headers: {
        Authorization: token,
      },
    }, { withCredentials: false })
    .then((res) => dispatch(fetchPharmaciesShowSuccess(res.data.pharmacies)))
    .catch((error) => dispatch(fetchPharmaciesShowFailure(error)));
};
