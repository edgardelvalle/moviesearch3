import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';
import genresReducer from './genresReducer';
import discoverReducer from './discoverReducer';
import movieListReducer from './movieListReducer';

export default combineReducers({
  genres: genresReducer,
  movies: movieListReducer,
  searchedMovies: searchMovieReducer,
});
