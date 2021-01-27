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
  font-size: xx-large;
`;

const HomePage = () => {
  return (
    <ContainerPopUp>
      <StyledPopUp>
        <Button
          to="/game"
          as={Link}
          color="primary"
          size="lg"
          href="/#"
          type="button"
        >
          Играть
        </Button>
        <Button
          to="/birdCatalog"
          as={Link}
          color="primary"
          size="lg"
          href="/#"
          type="button"
        >
          Каталог Птиц
        </Button>
      </StyledPopUp>
    </ContainerPopUp>
  );
};

export default HomePage;
