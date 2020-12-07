import MovieDetail from '../components/MovieDetail';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movie = props => {
  const { movie } = props;
  console.log(props);

  const { id } = useParams();

  useEffect(() => {
    props.getMovieDetails(id);
  }, [id]);

  if (props.movie.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MovieDetail movie={movie} />
    </div>
  );
};

const mapStateToProps = state => {
  return { movie: state.movieDetail };
};

export default connect(mapStateToProps, { getMovieDetails })(Movie);
