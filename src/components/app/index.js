import React, { useReducer } from 'react';
import {
  Details,
  FinalPopUp,
  Header,
  Play,
  Question,
  AnswersList,
} from '../index';
import { reducer, initState } from '../../reducer';
import { Wrapper, StyledRow, Column } from '../styled';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const {
    gameLevel,
    nextLevel,
    selectedBird,
    randomBirdId,
    correctAnswer,
    totalScore,
    correctBirdId,
    inCorrectBirdIds,
    birdCategory,
    birdConfig,
  } = state;

  const randomBird = birdConfig[birdCategory].find(
    (bird) => bird.id === randomBirdId
  );

  console.log(randomBird.name);

  const onBirdSelected = (id) =>
    dispatch({
      type: 'onBirdSelected',
      payload: id,
      randomBird: randomBird,
    });

  const onNextLevel = () => dispatch({ type: 'onNextLevel' });

  const onPlayAgain = () => dispatch({ type: 'onPlayAgain' });

  if (gameLevel === birdConfig.length) {
    return <FinalPopUp onPlayAgain={onPlayAgain} totalScore={totalScore} />;
  }

  return (
    <Wrapper>
      <Header gameLevel={gameLevel} totalScore={totalScore} />
      <Question randomBird={randomBird} correctAnswer={correctAnswer} />

      <StyledRow>
        <Column md={6}>
          <AnswersList
            onAnswer={onBirdSelected}
            birdCategory={birdConfig[birdCategory]}
            correctBirdId={correctBirdId}
            inCorrectBirdIds={inCorrectBirdIds}
          />
        </Column>
        <Column md={6}>
          <Details birdInfo={selectedBird} />
        </Column>
      </StyledRow>

      <Play nextLevel={nextLevel} onNextLevel={onNextLevel} />
    </Wrapper>
  );
};
export default App;
