import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { discoverMovies } from '../actions';
import { fetchGenres } from '../actions';
import { useEffect, useState } from 'react';

const Discovery = props => {
  const [genreFilter, setGenreFilter] = useState({});

  const {
    movies: { data },
    genres,
  } = props;
  const { discover } = useParams();

  useEffect(() => {
    props.discoverMovies(discover);
    props.fetchGenres();
  }, [discover]);

  const renderGenres =
    genres.data &&
    genres.data.genres.map(genre => (
      <li key={genre.id}>
        <button onClick={() => setGenreFilter(genre)}>{genre.name}</button>
      </li>
    ));

  return (
    <div>
      <h1>{discover.toUpperCase()}</h1>
      <h2>{genreFilter.name}</h2>
      {genres.data && (
        <div>
          <ul>{renderGenres}</ul>
        </div>
      )}

      {data && (
        <MovieList
          movies={data.results.filter(movies =>
            movies.genre_ids.includes(genreFilter.id)
          )}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { movies: state.discoverMovies, genres: state.genres };
};

export default connect(mapStateToProps, { discoverMovies, fetchGenres })(
  Discovery
);
