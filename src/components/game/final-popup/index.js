import React from 'react';
import styled from 'styled-components';
import { StyledButton, Text, ContainerPopUp, PopUp } from '../../styled';
import { useSelector, useDispatch } from 'react-redux';
import { onPlayAgain } from '../../../store/game/actionCreators';
import { Link } from 'react-router-dom';

const Title = styled(Text)`
  font-size: 3rem;
`;

const Button = styled(StyledButton)`
  margin-top: 5rem;
  display: block;
  margin-bottom: 1rem;
  font-size: xx-large;
`;

const FinalPopUp = () => {
  const dispatch = useDispatch();
  const totalScore = useSelector((state) => state.game.totalScore);
  return (
    <ContainerPopUp>
      <PopUp>
        <Title>Игра окончена!</Title>
        <Text>Вы набрали {totalScore} баллов из 30!</Text>
        <Button
          to="/game"
          as={Link}
          color="primary"
          size="lg"
          href="/#"
          type="button"
          onClick={() => dispatch(onPlayAgain())}
        >
          {' '}
          Играть еще раз
        </Button>
      </PopUp>
    </ContainerPopUp>
  );
};
export { FinalPopUp };
