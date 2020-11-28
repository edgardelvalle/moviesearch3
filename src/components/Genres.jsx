import { Link } from 'react-router-dom';
import genreList from './genrelist';

const Genres = () => {
  const list = genreList.genres.map(genre => (
    <li key={genre.id}>
      <Link to={`/genre/${genre.name}`}>{genre.name}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default Genres;
