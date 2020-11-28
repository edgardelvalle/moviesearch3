import styled from 'styled-components';
const { Link } = require('react-router-dom');

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  color: black;
  font-size: 0.9rem;
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
  );
};

export default Discover;
