import React from 'react';
import { Wrapper, StyledRow, Column } from '../components/styled';
import {
  AnswersList,
  Header,
  Question,
  DetailsContainerGame,
  Play,
  FinalPopUp,
} from '../components/index';
import { useSelector } from 'react-redux';

const Game = () => {
  const gameLevel = useSelector((state) => state.game.gameLevel);
  const randomBird = useSelector((state) => state.game.randomBird);
  console.log(randomBird.name);

  if (gameLevel > 5) {
    return <FinalPopUp />;
  }
  return (
    <Wrapper>
      <Header />
      <Question />
      <StyledRow>
        <Column md={6}>
          <AnswersList />
        </Column>
        <Column md={6}>
          <DetailsContainerGame />
        </Column>
      </StyledRow>
      <Play />
    </Wrapper>
  );
};
export default Game;
