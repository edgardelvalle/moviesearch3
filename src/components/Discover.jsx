import styled from 'styled-components';
const { Link } = require('react-router-dom');

const List = styled.ul`
  list-style-type: none;
  display: flex;
`;

const ListItem = styled.li`
  font-size: 0.9rem;
  padding-right: 15px;
  color: black;
  font-weight: 300;

  a {
    text-decoration: none;

    &:visited {
      color: black;
    }

    &:hover {
      color: gray;
    }
  }
`;

const Discover = () => {
  return (
    <div>
      <List>
        <ListItem>
          <Link to="/discover/upcoming">Upcoming</Link>
        </ListItem>
        <ListItem>
          <Link to="/discover/top_rated">Top Rated</Link>
        </ListItem>
        <ListItem>
          <Link to="/discover/popular">Popular</Link>
        </ListItem>
      </List>
    </div>
  );
};

export default Discover;
