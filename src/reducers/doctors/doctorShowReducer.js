import { DoctorShowActionTypes } from '../../actions/actionTypes';

const INITIAL_STATE = {
  doctor: [],
  isFetching: false,
  dShowErrorMessage: undefined,
};

const doctorShowReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case DoctorShowActionTypes.FITCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case DoctorShowActionTypes.FITCH_DATA_SUCCESS:
      return {
        ...state,
        doctor: action.doctor,
        isFetching: false,
      };
    case DoctorShowActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        dShowErrorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default doctorShowReducer;
