import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { searchMovie } from '../actions/index';
import { fetchGenres } from '../actions/index';

const Search = props => {
  const { movies, genres } = props;

  const { searchedMovies } = useParams();
  useEffect(() => {
    props.searchMovie(searchedMovies);
  }, [searchedMovies]);

  return (
    <div>
      <h1>{searchedMovies.toUpperCase()}</h1>
      {movies.data && <MovieList movies={movies.data.results} />}
    </div>
  );
};

const mapStateToProps = state => {
  return { movies: state.searchedMovies, genres: state.genres };
};

export default connect(mapStateToProps, { searchMovie, fetchGenres })(Search);
