import React from 'react';
import { Wrapper, StyledRow, Column } from '../components/styled';
import Header from '../components/game/header';
import Question from '../components/game/question';
import AnswersList from '../components/game/answersList';
import DetailsContainerGame from '../components/game/bird-details-container';
import Play from '../components/game/play-button';
import FinalPopUp from '../components/game/final-popup';
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
