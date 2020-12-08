import styled from 'styled-components';
import moment from 'moment';
import MovieList from './MovieList';

const MovieDetail = ({ movie, collection }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const Tagline = styled.h2`
    align-self: center;
  `;

  const PosterContainer = styled.div`
    align-self: center;
    position: relative;
    font-size: 2vw;
    overflow: hidden;

    #title {
      width: 100%;
      background: linear-gradient(0deg, black, transparent);
    }
  `;

  const Poster = styled.img`
    width: 100%;
    height: auto;
    overflow: hidden;
  `;

  const Title = styled.h1`
    width: 100%;
    height: auto;
    color: white;
    position: absolute;
    margin: 0;
    bottom: 0;
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
    font-style: italic;
    line-height: 2rem;
  `;

  const CollectionContainer = styled.div``;

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

  const Collection = () => {
    if (belongs_to_collection) {
      if (collection.loading) {
        return <div>Loading...</div>;
      } else {
        return (
          <CollectionContainer>
            <MovieList movies={collection.parts} />
          </CollectionContainer>
        );
      }
    } else {
      return <div>This movie is not a part of any collection</div>;
    }
  };

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
      <Overview>{overview}</Overview>
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
      <Collection />
    </Container>
  );
};

export default MovieDetail;
