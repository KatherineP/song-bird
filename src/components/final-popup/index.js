import React from 'react';
import styled from 'styled-components';
import { StyledButton, Text, ContainerPopUp, PopUp } from '../styled';

const Title = styled(Text)`
  font-size: 3rem;
`;

const StyledPopUp = styled(PopUp)`
  background: ${(props) => props.theme.colors.finalPopupColor};
`;

const Button = styled(StyledButton)`
  margin-top: 5rem;
`;

const FinalPopUp = ({ onPlayAgain, totalScore }) => {
  return (
    <ContainerPopUp>
      <StyledPopUp>
        <Title>Игра окончена!</Title>
        <Text>Вы набрали {totalScore} баллов из 30!</Text>
        <Button
          color="primary"
          size="lg"
          href="/#"
          role="button"
          onClick={onPlayAgain}
        >
          Играть снова
        </Button>
      </StyledPopUp>
    </ContainerPopUp>
  );
};

export { FinalPopUp };
