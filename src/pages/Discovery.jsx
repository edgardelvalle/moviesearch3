import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDiscoverMovies } from '../actions';
import { getGenres } from '../actions';
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
  const { discover } = useParams();

  const renderGenres = props.genres.loading ? (
    <div>Loading Genres</div>
  ) : (
    props.genres.genres.map(genre => (
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
    ))
  );

  const filteredMovies = props.movies.loading ? (
    <div>Loading...</div>
  ) : (
    props.movies.results.filter(movies =>
      movies.genre_ids.includes(genreFilter.id)
    )
  );

  const header = discover.split('_').join(' ').toUpperCase();

  useEffect(() => {
    props.getDiscoverMovies(discover);
    props.getGenres();
  }, [discover]);

  if (props.movies.loading) {
    return <div> Loading... </div>;
  } else if (props.movies.results === 0) {
    return <div>No movies found</div>;
  } else {
    return (
      <div>
        <h1>
          {header}
          <Subheader> {isFiltered && `> ${genreFilter.name}`}</Subheader>
        </h1>
        <div>
          <GenreList>
            <li>
              <button onClick={() => setIsFiltered(false)}>All</button>
            </li>
            {renderGenres}
          </GenreList>
        </div>

        <MovieList
          movies={isFiltered ? filteredMovies : props.movies.results}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { movies: state.movies, genres: state.genres };
};

export default connect(mapStateToProps, {
  getDiscoverMovies,
  getGenres,
})(Discovery);
