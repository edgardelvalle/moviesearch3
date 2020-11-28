import tmdb from '../api/tmdb';

export const fetchGenres = () => async dispatch => {
  const response = await tmdb.get('/genre/movie/list');

  dispatch({ type: 'FETCH_GENRES', payload: response });
};

export const searchMovie = query => async dispatch => {
  const response = await tmdb.get('/search/movie', {
    params: { query: query },
  });

  dispatch({ type: 'SEARCH_MOVIE', payload: response });
};

export const fetchPopular = () => async dispatch => {
  const response = await tmdb.get('/movie/popular');

  dispatch({ type: 'FETCH_POPULAR', payload: response });
};
export const fetchTopRated = () => async dispatch => {
  const response = await tmdb.get('/movie/top_rated');

  dispatch({ type: 'FETCH_TOP_RATED', payload: response });
};

export const fetchUpcoming = () => async dispatch => {
  const response = await tmdb.get('/movie/upcoming');

  dispatch({ type: 'FETCH_UPCOMING', payload: response });
};

export const setMovieList = movies => {
  return { type: 'SET_MOVIES', payload: movies };
};
