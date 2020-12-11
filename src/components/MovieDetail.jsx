import styled from 'styled-components';
import moment from 'moment';
import MovieList from './MovieList';

const MovieDetail = ({ movie, collection, trailers }) => {
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
    max-width: 70vw;
    height: auto;
    align-self: center;
    position: relative;
    font-size: 2vw;
    overflow: hidden;
    border-radius: 20px;

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

  const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 70%;

    h1 {
      font-size: 2.5rem;
    }

    .poster {
      max-width: 80%;
      border-radius: 20px;
    }

    .movie-rating {
      background-color: red;
      color: white;
      padding: 10px;
      border-radius: 50px;

      transform: translateX(-50px);
    }

    ul {
      list-style-type: none;
      display: flex;
      padding: 0;
    }

    li {
      color: #717171;
      padding-right: 10px;
    }

    p {
      line-height: 1.5rem;
    }

    .movie-trailer-img {
      border-radius: 20px;

      transition: all 0.25s;

      &:hover {
        scale: 1.05;
        z-index: 1000;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
      }
    }
  `;

  const CollectionContainer = styled.div`
    width: 100%;
  `;

  const {
    belongs_to_collection,
    genres,
    original_title,
    backdrop_path,
    poster_path,
    tagline,
    runtime,
    vote_average,
    release_date,
    overview,
    title,
  } = movie;

  const Collection = () => {
    if (belongs_to_collection) {
      if (collection.loading) {
        return <div>Loading...</div>;
      } else {
        return (
          <CollectionContainer>
            <h1 className="title">Collection</h1>
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
      </PosterContainer>
      <div className="data">
        <Details>
          <div>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
            />
            <span className="movie-rating">{vote_average}</span>
          </div>
          <div className="movie-details">
            <h1>{title}</h1>
            <ul>
              {genres.map(genre => {
                return <li>{genre.name}</li>;
              })}
              <li className="info-detail">
                | {`${Math.floor(runtime / 60)} h ${runtime % 60} min`}
              </li>
              <li className="info-detail">
                | {moment(release_date).format('MMM Do, YYYY')}
              </li>
            </ul>
            <p>{overview}</p>
            <div className="movie-trailers">
              <h2>Trailers</h2>
              <ul>
                {trailers.map(trailer => {
                  return (
                    <li className="movie-trailer" key={trailer.id}>
                      <a
                        href={`https://www.youtube.com/watch?v=${trailer.key}`}
                      >
                        <img
                          className="movie-trailer-img"
                          src={`https://img.youtube.com/vi/${trailer.key}/1.jpg`}
                          alt=""
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Details>
      </div>
      <Collection />
    </Container>
  );
};

export default MovieDetail;
