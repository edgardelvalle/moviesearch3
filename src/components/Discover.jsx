import { useState } from 'react';
import styled from 'styled-components';

const { NavLink, useParams } = require('react-router-dom');

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  width: 30%;
  justify-content: space-around;
`;

const ListItem = styled.li`
  font-size: 0.9rem;
  font-weight: 300;

  a {
    text-decoration: none;

    &:visited {
      color: black;
    }

    &:hover {
      color: grey;
    }
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
