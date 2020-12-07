import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { discoverMovies } from '../actions';
import { fetchGenres } from '../actions';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

const GenreList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    font-size: 0.8rem;
    background: none;
    border: none;
    box-shadow: none;
    &:hover {
      cursor: pointer;
      color: grey;
    }
  }
`;

const Subheader = styled.span`
  font-size: 1rem;
  color: gray;
  margin-left: 5px;
  font-weight: 400;
`;

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
          className={genreFilter.name == genre.name ? 'active' : ''}
          onClick={() => {
            setIsFiltered(true);
            setGenreFilter(genre);
          }}
        >
          {genre.name}
        </button>
      </li>
    ));

  const filteredMovies =
    data &&
    data.results.filter(movies => movies.genre_ids.includes(genreFilter.id));

  const header = discover.split('_').join(' ').toUpperCase();

  return (
    <div>
      <h1>
        {header}
        <Subheader> {isFiltered && `> ${genreFilter.name}`}</Subheader>
      </h1>
      {genres.data && (
        <div>
          <GenreList>
            <li>
              <button onClick={() => setIsFiltered(false)}>All</button>
            </li>
            {renderGenres}
          </GenreList>
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
