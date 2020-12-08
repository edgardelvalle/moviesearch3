import {
  FETCH_COLLECTION_LOADING,
  FETCH_COLLECTION,
  FETCH_COLLECTION_SUCCESS,
} from '../actions';

const initialState = {
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return { ...state, ...action.payload };
    case FETCH_COLLECTION_LOADING:
      return { ...state, loading: true };
    case FETCH_COLLECTION_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
