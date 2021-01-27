import React from 'react';
import { Wrapper, StyledRow, Column } from '../styled';
import Header from '../game/header';
import Question from '../game/question';
import AnswersList from '../game/answersList';
import DetailsContainerGame from '../game/bird-details-container';
import Play from '../game/play-button';
import FinalPopUp from '../game/final-popup';
import { connect } from 'react-redux';

const Game = ({ gameLevel, randomBird }) => {
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
const mapStateToProps = ({ game: { gameLevel, randomBird } }) => {
  return { gameLevel, randomBird };
};

export default connect(mapStateToProps)(Game);
