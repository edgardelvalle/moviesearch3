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
    width: 200px;
    height: 100%;
    margin: 10px;
  }

  .cast-img {
    border-radius: 10px;
    height: 150px;
    width: auto;
  }
  .cast-name {
    color: black;
    margin-top: 5px;
    text-align: center;
  }

  .place-holder {
    background-color: #c2c2c2;
    height: 150px;
    width: 100px;
    border-radius: 10px;
  }
`;

const profilePicPlaceHolder = <div className="place-holder"></div>;

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
            {actor.profile_path ? (
              <img
                className="cast-img"
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={`${actor.name} img`}
              />
            ) : (
              profilePicPlaceHolder
            )}

            <p className="cast-name">{actor.name}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Cast;
