import styled from 'styled-components';

const Container = styled.div`
  width: 90%;

  .cast-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    overflow-y: hidden;
  }

  .cast-item {
    width: 100px;
    height: 100px;
    margin: 10px;
  }

  .cast-img {
    border-radius: 10px;
    height: 100%;
    width: auto;
  }
`;

const Cast = ({ cast }) => {
  const actors = cast.cast.filter(
    actor => actor.known_for_department === 'Acting'
  );

  return (
    <Container>
      <h1 className="title">Cast</h1>
      <ul className="cast-list">
        {actors.map(actor => (
          <li key={actor.id} className="cast-item">
            <img
              className="cast-img"
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Cast;
