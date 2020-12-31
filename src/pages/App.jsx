import SearchBar from '../components/SearchBar';
import { Redirect, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Search from './Search';
import Discovery from './Discovery';
import Discover from '../components/Discover';
import Movie from './Movie';

import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const history = createBrowserHistory();

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const DiscoverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <DiscoverWrapper>
          <Discover />
          <SearchBar />
        </DiscoverWrapper>
        <Route exact path="/">
          <Redirect to="/discover/popular" />
        </Route>
        <Route exact path="/moviesearch3/search/:searchedMovies">
          <Search />
        </Route>
        <Route exact path="/moviesearch3/movie/:id">
          <Movie />
        </Route>
        <Route exact path="/moviesearch3/discover/:discover">
          <Discovery />
        </Route>
      </Router>
    </Container>
  );
};

export default App;
