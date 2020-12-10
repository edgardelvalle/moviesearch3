import styled from 'styled-components';
import moment from 'moment';
import MovieList from './MovieList';

const MovieDetail = ({ movie, collection }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .data {
      display: flex;
      justify-content: space-around;
      margin-top: 3rem;
    }
  `;

  const Tagline = styled.h2`
    font-size: 3vw;
    margin: 2rem;
    align-self: center;
  `;

  const PosterContainer = styled.div`
    background-color: black;
    width: auto;
    max-width: 60vw;
    height: auto;
    align-self: center;
    position: relative;
    font-size: 2vw;
    overflow: hidden;
    border-radius: 20px;

    #title {
      width: 100%;
    }

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  `;

  const Poster = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
  `;

  const Title = styled.h1`
    background: linear-gradient(0deg, black);
    width: 100%;
    color: white;
    position: absolute;
    padding-left: 10px;
    margin: 0;
    bottom: 0;
  `;

  const Details = styled.div`
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.75rem;

    .info-items {
      font-weight: 400;
    }

    .info-detail {
      font-weight: 600;
    }
  `;

  const Overview = styled.p`
    font-weight: 400;
    line-height: 2rem;
    width: 50%;
    padding-left: 25px;

    border-left: 1px solid gray;
  `;

  const CollectionContainer = styled.div`
    width: 100%;
  `;

  const {
    belongs_to_collection,
    genres,
    original_title,
    backdrop_path,
    tagline,
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
            <h1 className="title">Part of</h1>
            <MovieList movies={collection.parts} />
          </CollectionContainer>
        );
      }
    } else {
      return '';
    }
  };

  return (
    <Container>
      <Tagline>{tagline}</Tagline>
      <PosterContainer>
        <Poster
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`${original_title} poster`}
        />
        <div id="title">
          <Title>{movie.title}</Title>
        </div>
      </PosterContainer>
      <div className="data">
        <Details>
          <span className="info-items">Duration:</span>
          <p className="info-detail">
            {`${Math.floor(runtime / 60)} h ${runtime % 60} min`}{' '}
          </p>
          <span className="info-items">Release Date:</span>
          <p className="info-detail">
            {moment(release_date).format('MMM Do, YYYY')}
          </p>
          <span className="info-items">Genres:</span>
          <p>
            {genres.map(genre => (
              <span className="info-detail">{genre.name} </span>
            ))}
          </p>
          <span className="info-items">Rated:</span>
          <p className="info-detail">{vote_average} </p>
        </Details>
        <Overview>{overview}</Overview>
      </div>
      <Collection />
    </Container>
  );
};

export default MovieDetail;
