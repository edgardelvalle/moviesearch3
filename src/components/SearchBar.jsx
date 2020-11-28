import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    history.push(`/search/${query}`);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        placeholder="Search movie"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
