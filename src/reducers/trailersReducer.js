import {
  FETCH_TRAILERS,
  FETCH_TRAILERS_SUCCESS,
  FETCH_TRAILERS_LOADING,
  CLEAR_MOVIE,
} from '../actions';

const initialState = {
  loading: true,
  error: null,
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAILERS:
      return { ...state, ...action.payload };
    case FETCH_TRAILERS_LOADING:
      return { ...state, loading: true };
    case FETCH_TRAILERS_SUCCESS:
      return { ...state, loading: false };
    case CLEAR_MOVIE:
      return initialState;
    default:
      return state;
  }
};
