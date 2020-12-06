import styled from 'styled-components';
import moment from 'moment';

const MovieDetail = ({ movie }) => {
  const Container = styled.div`
    display: flex;
    margin: 0 5%;
    flex-direction: column;
    align-items: center;
  `;

  const Tagline = styled.h2``;

  const PosterContainer = styled.div`
    position: relative;
  `;

  const Poster = styled.img`
    border-radius: 20px;
  `;

  const Title = styled.h1`
    font-size: 5rem;
    color: white;
    background-image: linear-gradient(0deg, black, transparent);
    position: absolute;
    padding-left: 10px;
    bottom: 0;
    margin: 0;
  `;

  const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const Overview = styled.p`
    width: 50%;
    font-style: italic;
    line-height: 2rem;
  `;

  if (!movie) {
    return <div>No movie found</div>;
  }

  const {
    belongs_to_collection,
    genres,
    original_title,
    backdrop_path,
    tagline,
    revenue,
    runtime,
    vote_average,
    release_date,
    overview,
  } = movie;

  return (
    <Container>
      <PosterContainer>
        <Poster
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
          alt={`${original_title} poster`}
        />
        <Title>{movie.title}</Title>
      </PosterContainer>
      <Tagline>{tagline} </Tagline>
      <Overview>{overview}</Overview>
      <Details>
        <p>{`${Math.floor(runtime / 60)} h ${runtime % 60} min`} </p>
        <p>{moment(release_date).format('MMM Do, YYYY')}</p>
        <p>
          {genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </p>
        <p>
          Revenue:{' '}
          {revenue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <p>Vote: {vote_average} </p>

        <div>
          <p>Collection: </p>
          <p>{belongs_to_collection && belongs_to_collection.name}</p>
        </div>
      </Details>
    </Container>
  );
};

export default MovieDetail;
