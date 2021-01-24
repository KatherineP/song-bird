import React from 'react';
import styled from 'styled-components';
import { StyledButton, ContainerPopUp, PopUp } from '../styled';
import { Link } from 'react-router-dom';

const StyledPopUp = styled(PopUp)`
  text-align: center;
  padding: 7rem 2rem;
`;

const Button = styled(StyledButton)`
  display: block;
  margin-bottom: 1rem;
`;

const HomePage = () => {
  return (
    <ContainerPopUp>
      <StyledPopUp>
        <Link to="/game">
          <Button
            color="primary"
            size="lg"
            href="/#"
            type="button"
            //onClick={() => onPlay()}
          >
            Играть
          </Button>
        </Link>

        <Link to="/birdCatalog">
          <Button
            color="primary"
            size="lg"
            href="/#"
            type="button"
            //onClick={() => onPlayAgain()}
          >
            Каталог Птиц
          </Button>
        </Link>
      </StyledPopUp>
    </ContainerPopUp>
  );
};

export default HomePage;
