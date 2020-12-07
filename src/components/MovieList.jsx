import styled from 'styled-components';
import MovieCard from './MovieCard';

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const MovieList = ({ movies }) => {
  const renderMovies = movies.map(movie => {
    return <MovieCard movie={movie} />;
  });

  return <Cards>{renderMovies}</Cards>;
};

export default MovieList;
