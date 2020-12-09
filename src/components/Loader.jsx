const { default: styled } = require('styled-components');

const Container = styled.div`
  div {
    display: inline-block;
    background-color: black;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    margin: 10px;
  }

  @keyframes jump {
    from {
      transform: translateY(0);
    }
    from {
      transform: translateY(10);
    }
  }

  .dot {
    position: relative;
  }

  .dot-one {
    transform: translateY(0);
    animation-name: jump;
    animation-duration: 3s;
  }

  .dot-two {
    transform: translateY(0);
    animation-name: jump;
    animation-duration: 3s;
  }
  .dot-three {
    transform: translateY(0);
    animation-name: jump;
    animation-duration: 3s;
  }
`;

const Loader = () => {
  return (
    <Container className="dot-array">
      <div className="dot dot-one"></div>
      <div className="dot dot-two"></div>
      <div className="dot dot-three"></div>
    </Container>
  );
};

export default Loader;
