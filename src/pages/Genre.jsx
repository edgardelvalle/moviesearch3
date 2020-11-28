import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Genre = () => {
  const { genre } = useParams();
  return (
    <div>
      <h1>{genre.toUpperCase()}</h1>
      <MovieList />
    </div>
  );
};

export default Genre;
