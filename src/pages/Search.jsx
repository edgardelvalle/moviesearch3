import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { getSearchedMovie } from '../actions/index';

const Search = props => {
  const { movies } = props;
  const { searchedMovies } = useParams();

  useEffect(() => {
    props.getSearchedMovie(searchedMovies);
  }, [searchedMovies]);

  if (movies.loading) {
    return <div>Loading</div>;
  } else if (movies === 0) {
    return <div>No movies found</div>;
  } else {
    return (
      <div>
        <h1>{searchedMovies.toUpperCase()}</h1>
        <MovieList movies={movies.results} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { getSearchedMovie })(Search);
