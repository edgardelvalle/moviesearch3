import {
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SEARCH,
  FETCH_DISCOVER_LOADING,
  FETCH_DISCOVER_SUCCESS,
  FETCH_DISCOVER_ERROR,
  FETCH_DISCOVER_SEARCH,
  CLEAR_MOVIES,
  FETCH_RELATED_LOADING,
  FETCH_RELATED,
  FETCH_RELATED_SUCCESS,
} from '../actions';

const initialState = {
  loading: true,
  error: null,
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SEARCH:
    case FETCH_DISCOVER_SEARCH:
    case FETCH_RELATED:
      return { ...state, ...action.payload };
    case FETCH_MOVIES_LOADING:
    case FETCH_DISCOVER_LOADING:
    case FETCH_RELATED_LOADING:
      return { ...state, loading: true };
    case FETCH_DISCOVER_SUCCESS:
    case FETCH_MOVIES_SUCCESS:
    case FETCH_RELATED_SUCCESS:
      return { ...state, loading: false };
    case CLEAR_MOVIES:
      return initialState;
    default:
      return state;
  }
};
