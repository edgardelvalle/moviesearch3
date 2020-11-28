import SearchBar from '../components/SearchBar';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Genres from '../components/Genres';
import Search from './Search';
import Discovery from './Discovery';
import Discover from '../components/Discover';
import Genre from './Genre';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <SearchBar />
      <Discover />
      <Route exact path="/search/:searchedMovies">
        <Search />
      </Route>
      <Route exact path="/discover/:discover">
        <Discovery />
      </Route>
      <Route exact path="/genre/:genre">
        <Genre />
      </Route>
    </Router>
  );
};

export default App;
