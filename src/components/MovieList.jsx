import data from './movielistdummy';

const MovieList = ({ movies }) => {
  if (!movies) {
    return <div>No movies to display</div>;
  }

  const renderMovies = movies.map(movie => {
    return (
      <div key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <h1>{movie.title}</h1>
      </div>
    );
  });

  return <div>{renderMovies}</div>;
};

export default MovieList;
