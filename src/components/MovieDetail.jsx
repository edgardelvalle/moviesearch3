const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>No movie found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieDetail;
