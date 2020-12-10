import MovieDetail from '../components/MovieDetail';
import { connect } from 'react-redux';
import { getMovieDetails, clearMovie, getCollection } from '../actions';
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
  const { movie, collection } = props;
  console.log(movie);
  const { id } = useParams();

  useEffect(() => {
    props.getMovieDetails(id);
  }, [id]);

  useEffect(() => {
    if (movie.belongs_to_collection) {
      props.getCollection(movie.belongs_to_collection.id);
    }
  }, [movie]);

  if (movie.loading) {
    return <Loader />;
  } else {
    return (
      <Container>
        <Helmet>
          <title>{movie.name}</title>
        </Helmet>
        <MovieDetail movie={movie} collection={collection} />
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return { movie: state.movieDetail, collection: state.collection };
};

export default connect(mapStateToProps, {
  getMovieDetails,
  getCollection,
  clearMovie,
})(Movie);
