import MovieDetail from '../components/MovieDetail';
import { connect } from 'react-redux';
import { getMovieDetails, clearMovie, getCollection } from '../actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movie = props => {
  const { movie, collection } = props;
  const { id } = useParams();

  useEffect(() => {
    props.getMovieDetails(id);
    return () => clearMovie();
  }, [id]);

  const RenderCollections = () => {};

  if (movie.loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <MovieDetail movie={movie} collection={collection} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return { movie: state.movieDetail, collection: state.collection };
};

export default connect(mapStateToProps, {
  getMovieDetails,
  getCollection,
  clearMovie,
})(Movie);
