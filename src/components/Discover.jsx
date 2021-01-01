import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  width: 30%;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  transition: all 0.25s;
  font-size: 0.9rem;
  font-weight: 300;
  a {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
  }

  &:hover {
    color: grey;
  }
  .active {
    color: black;
    font-weight: 500;
    cursor: default;

    &:hover {
      color: black;
    }
  }
`;

const Discover = () => {
  return (
    <List>
      <ListItem>
        <NavLink activeClassName="active" to="/discover/upcoming">
          Upcoming
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink activeClassName="active" to="/discover/top_rated">
          Top Rated
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink activeClassName="active" to="/discover/popular">
          Popular
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Discover;
