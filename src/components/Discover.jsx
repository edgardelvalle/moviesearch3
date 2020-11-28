const { Link } = require('react-router-dom');

const Discover = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/discover/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/discover/top_rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/discover/popular">Popular</Link>
        </li>
      </ul>
    </div>
  );
};

export default Discover;
