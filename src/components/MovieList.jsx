import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieCard = styled.div`
  width: 10%;
  margin: 0 30px;
  text-align: center;

  h1 {
    font-size: 1rem;
  }
  img {
    height: 300px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const MovieList = ({ movies }) => {
  if (!movies) {
    return <div>No movies to display</div>;
  }

  const renderMovies = movies.map(movie => {
    return (
      <MovieCard key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <h1>{movie.title}</h1>
        </Link>
        {movie.genre_ids.map(genre => {
          return <span>{genre} </span>;
        })}
      </MovieCard>
    );
  });

  return <Cards>{renderMovies}</Cards>;
};

export default MovieList;
