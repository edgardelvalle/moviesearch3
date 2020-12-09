import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { getSearchedMovie, clearMovies } from '../actions/index';
import Loader from '../components/Loader';

const Search = props => {
  const { movies } = props;
  const { searchedMovies } = useParams();

  useEffect(() => {
    props.getSearchedMovie(searchedMovies);
    return () => props.clearMovies();
  }, [searchedMovies]);

  if (movies.loading) {
    return <Loader />;
  } else if (movies === 0) {
    return <div>No movies found</div>;
  } else {
    return (
      // <Loader />
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

export default connect(mapStateToProps, { getSearchedMovie, clearMovies })(
  Search
);
