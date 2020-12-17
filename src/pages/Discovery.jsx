import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDiscoverMovies } from '../actions';
import { getGenres } from '../actions';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';

const GenreList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .genre-select {
    font-size: 0.8rem;
    background: none;
    border: none;
    box-shadow: none;
    &:hover {
      cursor: pointer;
      color: grey;
    }

    @media (max-width: 768px) {
      white-space: nowrap;
      font-size: 1rem;
      border: 1px solid #717171;
      border-radius: 1.5rem;
      padding: 5px 0.9rem;
      margin: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-y: hidden;

    justify-content: flex-start;

    .active {
      color: #409cff;
      border: 1px solid #409cff;

      &:hover {
        cursor: inherit;
        color: #409cff;
      }
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
    props.genres.genres.map(genre => {
      const filtered = genreFilter.name == genre.name && isFiltered;
      return (
        <li key={genre.id}>
          <button
            className={`genre-select ${filtered ? 'active' : ''}`}
            onClick={() => {
              setIsFiltered(true);
              setGenreFilter(genre);
            }}
          >
            {genre.name}
          </button>
        </li>
      );
    })
  );

  const filteredMovies = props.movies.loading ? (
    <Loader />
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
    return <Loader />;
  } else if (props.movies.results === 0) {
    return <div>No movies found</div>;
  } else {
    return (
      <div>
        <Helmet>
          <title>{header}</title>
        </Helmet>
        <h1>
          {header}
          <Subheader> {isFiltered && `> ${genreFilter.name}`}</Subheader>
        </h1>
        <div>
          <GenreList>
            <li>
              <button
                className="genre-select"
                onClick={() => setIsFiltered(false)}
              >
                All
              </button>
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
