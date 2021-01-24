import React from 'react';
import { Wrapper, StyledRow, Column } from '../styled';
import Header from '../header';
import Question from '../question';
import AnswersList from '../answersList';
import Details from '../bird-details';
import Play from '../play-button';
import FinalPopUp from '../final-popup';
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
          <Details />
        </Column>
      </StyledRow>
      <Play />
    </Wrapper>
  );
};
const mapStateToProps = ({ gameLevel, randomBird }) => {
  return { gameLevel, randomBird };
};

export default connect(mapStateToProps)(Game);
