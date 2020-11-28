import data from './movielistdummy';

const MovieList = () => {
  if (data.results.length === 0) {
    return <div>No movies to display</div>;
  }

  const renderMovies = data.results.map(movie => {
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
