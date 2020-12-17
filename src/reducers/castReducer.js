import {
  FETCH_CAST_LOADING,
  FETCH_CAST,
  FETCH_CAST_SUCCESS,
} from '../actions/index';

const initialState = {
  loading: true,
  error: null,
  cast: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAST:
      return { ...state, ...action.payload };
    case FETCH_CAST_LOADING:
      return { ...state, loading: true };
    case FETCH_CAST_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
