import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Search = () => {
  const { movie } = useParams();
  return (
    <div>
      <h1>{movie.toUpperCase()}</h1>
      <MovieList />
    </div>
  );
};

export default Search;
