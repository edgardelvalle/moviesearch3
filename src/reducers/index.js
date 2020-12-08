import { combineReducers } from 'redux';
import genreReducer from './genreReducer';
import movieDetailReducer from './movieDetailReducer';
import moviesReducer from './moviesReducer';
import collectionReducer from './collectionReducer';

export default combineReducers({
  movies: moviesReducer,
  genres: genreReducer,
  collection: collectionReducer,
  movieDetail: movieDetailReducer,
});
