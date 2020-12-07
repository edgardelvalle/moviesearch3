import tmdb from '../api/tmdb';

export const FETCH_MOVIES_LOADING = 'FETCH_MOVIES_LOADING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_MOVIES_SEARCH = 'FETCH_MOVIES_SEARCH';

export const FETCH_DISCOVER_LOADING = 'FETCH_DISCOVER_LOADING';
export const FETCH_DISCOVER_SUCCESS = 'FETCH_DISCOVER_SUCCESS';
export const FETCH_DISCOVER_ERROR = 'FETCH_DISCOVER_ERROR';
export const FETCH_DISCOVER_SEARCH = 'FETCH_DISCOVER_SEARCH';

export const FETCH_GENRES_LOADING = 'FETCH_GENRES_LOADING';
export const FETCH_GENRES = 'FETCH_GENRES';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';

export const FETCH_MOVIEDETAIL_LOADING = 'FETCH_MOVIEDETAIL_LOADING';
export const FETCH_MOVIEDETAIL = 'FETCH_MOVIEDETAIL';
export const FETCH_MOVIEDETAIL_SUCCESS = 'FETCH_MOVIEDETAIL_SUCCESS';

export const getSearchedMovie = query => async dispatch => {
  dispatch({ type: FETCH_MOVIES_LOADING });
  const response = await tmdb.get('/search/movie', {
    params: { query: query },
  });
  await dispatch({
    type: FETCH_MOVIES_SEARCH,
    payload: response.data,
  });
  dispatch({
    type: FETCH_MOVIES_SUCCESS,
  });
};

export const getDiscoverMovies = discover => async dispatch => {
  dispatch({ type: FETCH_DISCOVER_LOADING });
  const response = await tmdb.get(`/movie/${discover}`);
  await dispatch({
    type: FETCH_DISCOVER_SEARCH,
    payload: response.data,
  });
  dispatch({
    type: FETCH_DISCOVER_SUCCESS,
  });
};

export const getGenres = () => async dispatch => {
  dispatch({ type: FETCH_GENRES_LOADING });
  const response = await tmdb.get('/genre/movie/list');
  await dispatch({
    type: FETCH_GENRES,
    payload: response.data,
  });
  dispatch({
    type: FETCH_GENRES_SUCCESS,
  });
};

export const getMovieDetails = id => async dispatch => {
  dispatch({ type: FETCH_MOVIEDETAIL_LOADING });

  const response = await tmdb.get(`/movie/${id}`);
  await dispatch({ type: FETCH_MOVIEDETAIL, payload: response.data });

  dispatch({ type: FETCH_MOVIEDETAIL_SUCCESS });
};
