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
  /* text-decoration: none; */
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
          // onClick={() => history.push('/games')}
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
          //onClick={() => history.push('/birdCatalog')}
        >
          Каталог Птиц
        </Button>
      </StyledPopUp>
    </ContainerPopUp>
  );
};

export default HomePage;
