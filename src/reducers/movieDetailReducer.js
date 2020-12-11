import {
  FETCH_MOVIEDETAIL_LOADING,
  FETCH_MOVIEDETAIL,
  FETCH_MOVIEDETAIL_SUCCESS,
  FETCH_TRAILERS_LOADING,
  FETCH_TRAILERS,
  FETCH_TRAILERS_SUCCESS,
  CLEAR_MOVIE,
} from '../actions';

const initialState = {
  loading: true,
  error: null,
  genres: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIEDETAIL:
    case FETCH_TRAILERS:
      return { ...state, ...action.payload };
    case FETCH_MOVIEDETAIL_LOADING:
    case FETCH_TRAILERS_LOADING:
      return { ...state, loading: true };
    case FETCH_MOVIEDETAIL_SUCCESS:
    case FETCH_TRAILERS_SUCCESS:
      return { ...state, loading: false };
    case CLEAR_MOVIE:
      return initialState;
    default:
      return state;
  }
};
