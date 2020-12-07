import {
  FETCH_MOVIEDETAIL_LOADING,
  FETCH_MOVIEDETAIL,
  FETCH_MOVIEDETAIL_SUCCESS,
} from '../actions';

const initialState = {
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIEDETAIL:
      return { ...state, ...action.payload };
    case FETCH_MOVIEDETAIL_LOADING:
      return { ...state, loading: true };
    case FETCH_MOVIEDETAIL_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
