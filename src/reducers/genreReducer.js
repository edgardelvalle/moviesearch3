import {
  FETCH_GENRES_LOADING,
  FETCH_GENRES,
  FETCH_GENRES_SUCCESS,
} from '../actions';

const initialState = {
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return { ...state, ...action.payload };
    case FETCH_GENRES_LOADING:
      return { ...state, loading: true };
    case FETCH_GENRES_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
