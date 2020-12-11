import MovieDetail from '../components/MovieDetail';
import { connect } from 'react-redux';
import {
  getMovieDetails,
  clearMovie,
  getCollection,
  getTrailers,
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
  const { movie, collection, trailers } = props;
  const { id } = useParams();
  useEffect(() => {
    props.getMovieDetails(id);
    props.getTrailers(id);
    props.clearMovie();
  }, [id]);

  useEffect(() => {
    if (movie.belongs_to_collection) {
      props.getCollection(movie.belongs_to_collection.id);
    }
  }, [movie]);

  if (movie.loading && collection.loading && trailers.loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
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
  };
};

export default connect(mapStateToProps, {
  getMovieDetails,
  getCollection,
  clearMovie,
  getTrailers,
})(Movie);
