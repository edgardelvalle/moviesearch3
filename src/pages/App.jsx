import SearchBar from '../components/SearchBar';
import { Redirect, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Search from './Search';
import Discovery from './Discovery';
import Discover from '../components/Discover';
import Genre from './Genre';
import Movie from './Movie';

import styled from 'styled-components';

const history = createBrowserHistory();

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0 10%;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DiscoverWrapper = styled.div`
  width: 25%;
`;

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <NavWrapper>
          <DiscoverWrapper>
            <Discover />
          </DiscoverWrapper>
          <SearchBar />
        </NavWrapper>

        <Route exact path="/">
          <Redirect to="/discover/popular" />
        </Route>
        <Route exact path="/search/:searchedMovies">
          <Search />
        </Route>
        <Route exact path="/movie/:id">
          <Movie />
        </Route>
        <Route exact path="/discover/:discover">
          <Discovery />
        </Route>
        <Route exact path="/genre/:genre">
          <Genre />
        </Route>
      </Router>
    </Container>
  );
};

export default App;
