import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/index';
import { useEffect } from 'react';

const Search = props => {
  const { movies } = props;

  const { searchedMovies } = useParams();
  useEffect(() => {
    props.searchMovie(searchedMovies);
  }, [searchedMovies]);

  console.log(movies);
  return (
    <div>
      <h1>{searchedMovies.toUpperCase()}</h1>
      {movies.data && <MovieList movies={movies.data.results} />}
    </div>
  );
};

const mapStateToProps = state => {
  return { movies: state.searchedMovies };
};

export default connect(mapStateToProps, { searchMovie })(Search);
