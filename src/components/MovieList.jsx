import styled from 'styled-components';
import MovieCard from './MovieCard';

const Cards = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieList = ({ movies }) => {
  const renderMovies = movies.map(movie => {
    return <MovieCard movie={movie} />;
  });

  return <Cards>{renderMovies}</Cards>;
};

export default MovieList;
