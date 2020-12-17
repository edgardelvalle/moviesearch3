import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { getSearchedMovie, clearMovies } from '../actions/index';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  .header {
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.95);
    margin-left: 5%;
    position: sticky;
    top: 0;
  }
`;

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
      <Container>
        <Helmet>
          <title>{`${searchedMovies} - search results`}</title>
        </Helmet>
        <h1 className="header">{searchedMovies.toUpperCase()}</h1>
        <MovieList movies={movies.results} />
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { getSearchedMovie, clearMovies })(
  Search
);
