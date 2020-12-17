import MovieDetail from '../components/MovieDetail';
import { connect } from 'react-redux';
import {
  getMovieDetails,
  clearMovie,
  getCollection,
  getTrailers,
  getRelatedMovies,
  getCast,
} from '../actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;
  justify-content: space-around;
`;

const Movie = props => {
  const { movie, collection, trailers, related, cast } = props;

  const { id } = useParams();
  useEffect(() => {
    props.getMovieDetails(id);
    props.getTrailers(id);
    props.getRelatedMovies(id);
    props.getCast(id);

    return () => {
      props.clearMovie();
    };
  }, [id]);

  useEffect(() => {
    if (movie.belongs_to_collection) {
      props.getCollection(movie.belongs_to_collection.id);
    }
  }, [movie]);

  if (movie.loading && collection.loading && trailers.loading) {
    return <Loader />;
  } else {
    return (
      <Container>
        <Helmet>
          <title>{movie.title}</title>
        </Helmet>
        <MovieDetail
          movie={movie}
          collection={collection}
          trailers={trailers.results.filter(
            trailer => trailer.type === 'Trailer'
          )}
          relatedMovies={related}
          cast={cast}
        />
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    movie: state.movieDetail,
    collection: state.collection,
    trailers: state.trailers,
    related: state.related,
    cast: state.cast,
  };
};

export default connect(mapStateToProps, {
  getMovieDetails,
  getRelatedMovies,
  getCollection,
  getCast,
  clearMovie,
  getTrailers,
})(Movie);
