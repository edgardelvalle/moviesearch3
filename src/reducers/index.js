import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';
import discoverMovieReducer from './discoverMovieReducer';
import genreReducer from './genreReducer';
import movieDetailReducer from './movieDetailReducer';

export default combineReducers({
  searchedMovies: searchMovieReducer,
  discoverMovies: discoverMovieReducer,
  genres: genreReducer,
  movieDetail: movieDetailReducer,
});
