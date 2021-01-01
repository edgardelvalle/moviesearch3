import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 10% 5% 10%;
  }
`;
const Input = styled.input`
  position: absolute;
  bottom: -17px;

  background: url('https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png')
    no-repeat 9px center;
  border: none;
  padding: 9px 5px 9px 32px;
  width: 30px;
  color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 10em;
  transition: all 0.5s;

  :focus {
    border: solid 1px #ccc;
    width: 160px;
    padding-left: 32px;
    color: #000;
    background-color: #fff;
    cursor: auto;
  }

  @media (max-width: 768px) {
    border-radius: 1em;
    border: solid 1px #ccc;
    width: 100%;
    padding-left: 32px;
    color: #000;
    background-color: #fff;
    cursor: auto;

    :focus {
      border-radius: 1em;
      border: solid 1px #ccc;
      width: 100%;
      padding-left: 32px;
      color: #000;
      background-color: #fff;
      cursor: auto;
    }
  }
`;

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    if (query) {
      history.push(`/search/${query}`);
      setQuery('');
    }
  }

  return (
    <SearchWrapper>
      <form onSubmit={handleSubmitForm}>
        <Input
          key="query"
          placeholder="Search movie"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </SearchWrapper>
  );
};

export default SearchBar;
