import styled from 'styled-components';
import moment from 'moment';

const MovieDetail = ({ movie }) => {
  const Container = styled.div`
    display: flex;
    margin: 2.5%;
    flex-direction: column;
    align-items: flex-start;
  `;

  const Tagline = styled.h2`
    align-self: center;
  `;

  const PosterContainer = styled.div`
    width: 75%;
    align-self: center;
    position: relative;
    font-size: 2vw;

    #title {
      color: white;
      background-image: linear-gradient(0deg, black, transparent);
      position: absolute;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      right: 0;
      left: 0;
      bottom: 0;
      margin: 0;
    }
  `;

  const Poster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20px;
  `;

  const Title = styled.h1`
    margin: 0;
    padding: 20px;
  `;

  const Details = styled.div`
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.75rem;

    .info {
      font-size: 1.5rem;
    }
    .info-items {
      font-weight: 700;
    }
  `;

  const Overview = styled.p`
    width: 50%;
    font-style: italic;
    line-height: 2rem;

    #summary {
      font-weight: 700;
      display: block;
      font-style: normal;
    }
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
      <PosterContainer className="Poster container">
        <Poster
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`${original_title} poster`}
        />
        <div id="title">
          <Title>{movie.title}</Title>
        </div>
      </PosterContainer>
      <Tagline>{tagline}</Tagline>
      <Overview>
        <span id="summary">Summary: </span>
        {overview}
      </Overview>
      <Details>
        <h3 className="info">Info</h3>

        <span className="info-items">Duration:</span>
        <p>{`${Math.floor(runtime / 60)} h ${runtime % 60} min`} </p>
        <span className="info-items">Release Date:</span>
        <p>{moment(release_date).format('MMM Do, YYYY')}</p>
        <span className="info-items">Genres:</span>
        <p>
          {genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </p>
        <span className="info-items">Revenue:</span>
        <p>
          {revenue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <span className="info-items">Rated:</span>
        <p>{vote_average} </p>
      </Details>
      <div>
        <p>Collection: </p>
        <p>{belongs_to_collection && belongs_to_collection.name}</p>
      </div>
    </Container>
  );
};

export default MovieDetail;
