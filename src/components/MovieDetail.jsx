import styled from 'styled-components';
import moment from 'moment';
import MovieList from './MovieList';

const MovieDetail = ({ movie, collection, trailers }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
  `;

  const Tagline = styled.h2`
    font-size: 3rem;
    margin: 2rem 0;
  `;

  const PosterContainer = styled.div`
    max-width: 80%;

    @media (max-width: 768px) {
      align-self: flex-start;
      width: 100vw;
      border-radius: 0;
      box-shadow: none;
    }
  `;

  const Poster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

    @media (max-width: 768px) {
      width: 100vw;
      border-radius: 0;
      box-shadow: none;
    }
  `;

  const Details = styled.div`
    margin: 5% 10%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    
    .movie-detail {
      @media (max-width: 768px) {
      margin: 0 5%;
    }
    }

    .movie-detail__title {
      font-size: 2.5rem;
  }


    .movie-detail__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color #717171;
    }

    .movie-genres {
      list-style-type: none;
      display: flex;
      padding: 0;
    }

    .genre {
      padding: 0 10px;
    }

    .info-detail {
      margin: 0 10px;
    }

    .poster {
      max-width: 80%;
      border-radius: 20px;
    }

  .movie-detail__overview {
    font-weight: 300;
    line-height: 1.5rem;
    text-align: justify;

  }

  .trailer-videos {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

  }

  .trailer-video {
    margin: 10px 10px 0 0 ;
  }

  .trailer-video__thumbnail {
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

    .info-time{
      display: flex;
      flex-direction: row;
      align-items: center;
      p:first-child {
        padding-right: 10px;
        border-right: 1px solid #ccc;
        margin-right: 10px;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      width: 100vw;

      .poster {
        display: none;
      }

      .info-time {
        display: flex;
        margin: 0;
        flex-direction: row;
        p:first-child {
          border-right: 1px solid #717171;
          padding-right: 10px;
          margin-right: 10px;
        }
      }
    }
  `;

  const CollectionContainer = styled.div`
    width: 100%;
    justify-content: flex-start;
  `;

  const {
    belongs_to_collection,
    genres,
    original_title,
    backdrop_path,
    poster_path,
    tagline,
    runtime,
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
            <MovieList id="collections" movies={collection.parts} />
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

      <Details>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />

        <div className="movie-detail">
          <h1 className="movie-detail__title">{title}</h1>

          <div className="movie-detail__meta">
            <ul className="movie-genres">
              {genres.map(genre => {
                return <li className="genre">{genre.name}</li>;
              })}
            </ul>
            <p className="info-detail">
              {`${Math.floor(runtime / 60)} h ${runtime % 60} min`}
            </p>
            <p className="info-detail">
              {moment(release_date).format('MMMM Do, YYYY')}
            </p>
          </div>

          <p className="movie-detail__overview">{overview}</p>
          <div className="movie-detail__trailers">
            <h2 className="trailer-title">Trailers</h2>
            <ul className="trailer-videos">
              {trailers.map(trailer => {
                return (
                  <li className="trailer-video" key={trailer.id}>
                    <a href={`https://www.youtube.com/watch?v=${trailer.key}`}>
                      <img
                        className="trailer-video__thumbnail"
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

      <Collection />
    </Container>
  );
};

export default MovieDetail;
