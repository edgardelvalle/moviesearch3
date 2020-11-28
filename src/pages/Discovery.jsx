import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { discoverMovies } from '../actions';
import { fetchGenres } from '../actions';
import { useEffect, useState } from 'react';

const Discovery = props => {
  const [genreFilter, setGenreFilter] = useState({});
  const [isFiltered, setIsFiltered] = useState(false);

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
        <button
          onClick={() => {
            setIsFiltered(true);
            setGenreFilter(genre);
          }}
        >
          {genre.name}
        </button>
      </li>
    ));

  const filteredMovies = data.results.filter(movies =>
    movies.genre_ids.includes(genreFilter.id)
  );

  const header = discover.split('_').join(' ').toUpperCase();

  return (
    <div>
      <h1>
        {header}
        <span>{isFiltered && genreFilter.name}</span>
      </h1>
      {genres.data && (
        <div>
          <ul>
            <li>
              <button onClick={() => setIsFiltered(false)}>All</button>
            </li>
            {renderGenres}
          </ul>
        </div>
      )}

      {data && (
        <MovieList movies={isFiltered ? filteredMovies : data.results} />
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
