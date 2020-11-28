import tmdb from '../api/tmdb';

export const searchMovie = query => async dispatch => {
  const response = await tmdb.get('/search/movie', {
    params: { query: query },
  });

  dispatch({ type: 'SEARCH_MOVIE', payload: response });
};

export const discoverMovies = discover => async dispatch => {
  const response = await tmdb.get(`/movie/${discover}`);

  dispatch({ type: 'DISCOVER_MOVIES', payload: response });
};
