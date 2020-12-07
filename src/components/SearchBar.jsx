import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  position: relative;

  .search-icon {
    color: grey;
    position: absolute;
    top: 8px;
    left: 8px;
    width: 14px;
  }
`;

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 25px;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;
`;

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    history.push(`/search/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <SearchWrapper>
        <Input
          placeholder="Search movie"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <i class="fas fa-search search-icon"></i>
      </SearchWrapper>
    </form>
  );
};

export default SearchBar;
