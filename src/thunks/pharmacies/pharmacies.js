import { sendAuthorizedRequest } from '../../util/api';
import fetchErrors from '../../actions/common/fetchErrorsActions';
import isFetching from '../../actions/common/isFetchingActions';
import { fetchPharmaciesShow, fetchPharmacyOrders } from '../../actions/pharmacies/pharmaciesActions';

export const pharmaciesShow = () => async (dispatch) => {
  const path = 'api/v1/pharmacies';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(fetchPharmaciesShow({ pharmacies: res.data.pharmacies }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    dispatch(fetchErrors(error.response.status));
  }
};

export const pharmacyOrders = (orders) => async (dispatch) => {
  const path = 'api/v1/orders';
  const token = localStorage.getItem('token');
  dispatch(isFetching({ fetching: true }));
  try {
    const res = await sendAuthorizedRequest('post', path, token, orders);
    dispatch(fetchPharmacyOrders({ order: res.data }));
    dispatch(isFetching({ fetching: false }));
  } catch (error) {
    dispatch(isFetching({ fetching: false }));
    dispatch(fetchErrors(error.response.statusText));
  }
};
