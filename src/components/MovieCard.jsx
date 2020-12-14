import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
  const Container = styled(motion.div)`
    position: relative;
    width: 40%;
    max-width: 12rem;
    max-height: 306px;

    margin: 10px;
    overflow: hidden;
    background-size: cover;
    transition: visibility ease-in-out 2ms;
    background-color: gray;
    border-radius: 20px;

    display: flex;
    justify-content: center;

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
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  const Title = styled.h1`
    position: absolute;
    font-size: 1.5rem;
    margin: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;

    padding: 10px;

    background-image: linear-gradient(0deg, black, transparent);
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
  `;

  return (
    <Container whileHover={{ scale: 1.05 }}>
      <Link to={`/moviesearch3/movie/${movie.id}`}>
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
