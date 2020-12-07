import { combineReducers } from 'redux';
import genreReducer from './genreReducer';
import movieDetailReducer from './movieDetailReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
  movies: moviesReducer,
  genres: genreReducer,
  movieDetail: movieDetailReducer,
});
