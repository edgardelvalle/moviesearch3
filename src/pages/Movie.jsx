import MovieDetail from '../components/MovieDetail';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movie = props => {
  const { movie } = props;

  const { id } = useParams();

  useEffect(() => {
    props.getMovieDetails(id);
  }, [id]);

  return <div>{movie && <MovieDetail movie={movie.data} />}</div>;
};

const mapStateToProps = state => {
  return { movie: state.movieDetail };
};

export default connect(mapStateToProps, { getMovieDetails })(Movie);
