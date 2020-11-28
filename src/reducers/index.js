import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';
import discoverMovieReducer from './discoverMovieReducer';

export default combineReducers({
  searchedMovies: searchMovieReducer,
  discoverMovies: discoverMovieReducer,
});
