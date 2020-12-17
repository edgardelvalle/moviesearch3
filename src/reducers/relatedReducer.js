import {
  FETCH_RELATED_LOADING,
  FETCH_RELATED,
  FETCH_RELATED_SUCCESS,
  CLEAR_MOVIES,
} from '../actions';

const initialState = {
  loading: true,
  error: null,
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RELATED:
      return { ...state, ...action.payload };
    case FETCH_RELATED_LOADING:
      return { ...state, loading: true };
    case FETCH_RELATED_SUCCESS:
      return { ...state, loading: false };
    case CLEAR_MOVIES:
      return initialState;
    default:
      return state;
  }
};
