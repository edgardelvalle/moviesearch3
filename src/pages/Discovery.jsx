import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { discoverMovies } from '../actions';
import { useEffect } from 'react';
import Genres from '../components/Genres';

const Discovery = props => {
  const {
    movies: { data },
  } = props;
  const { discover } = useParams();

  useEffect(() => {
    props.discoverMovies(discover);
  }, [discover]);

  return (
    <div>
      <h1>{discover.toUpperCase()}</h1>
      <Genres />
      {data && <MovieList movies={data.results} />}
    </div>
  );
};

const mapStateToProps = state => {
  return { movies: state.discoverMovies };
};

export default connect(mapStateToProps, { discoverMovies })(Discovery);
