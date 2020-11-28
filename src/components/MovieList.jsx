import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  if (!movies) {
    return <div>No movies to display</div>;
  }

  const renderMovies = movies.map(movie => {
    return (
      <div key={movie.id}>
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
      </div>
    );
  });

  return <div>{renderMovies}</div>;
};

export default MovieList;
