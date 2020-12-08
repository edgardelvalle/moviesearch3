import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
  if (!movie) {
    return <div>Movie not available</div>;
  }

  const Container = styled(motion.div)`
    position: relative;
    width: 250px;
    height: auto;
    max-height: 470px;
    margin: 10px;
    overflow: hidden;
    background-size: cover;
    transition: visibility ease-in-out 2ms;

    a {
      text-decoration: none;
      color: white;
    }
    &:hover {
      z-index: 1000;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    }

    &:hover #title {
      visibility: visible;
      opacity: 1;
    }
  `;

  const Poster = styled.img`
    width: 100%;
  `;

  const Title = styled.h1`
    position: absolute;
    font-size: 2vw;
    margin: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;

    padding: 10px;

    background-image: linear-gradient(0deg, #1c1c1c, transparent);
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
  `;

  return (
    <Container whileHover={{ scale: 1.05 }}>
      <Link to={`/movie/${movie.id}`}>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />

        <Title id="title">{movie.title}</Title>
      </Link>
    </Container>
  );
};

export default MovieCard;
