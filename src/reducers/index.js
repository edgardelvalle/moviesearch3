import { combineReducers } from 'redux';
import genreReducer from './genreReducer';
import movieDetailReducer from './movieDetailReducer';
import moviesReducer from './moviesReducer';
import collectionReducer from './collectionReducer';
import trailersReducer from './trailersReducer';

export default combineReducers({
  movies: moviesReducer,
  trailers: trailersReducer,
  genres: genreReducer,
  collection: collectionReducer,
  movieDetail: movieDetailReducer,
});
