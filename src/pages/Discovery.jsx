import MovieList from '../components/MovieList';
import { useParams } from 'react-router-dom';

const Discovery = () => {
  const { discover } = useParams();

  return (
    <div>
      <h1>{discover.toUpperCase()}</h1>
      <MovieList />
    </div>
  );
};

export default Discovery;
