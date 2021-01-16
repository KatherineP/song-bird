import React, { useReducer } from 'react';
import './app.css';
import {
  Details,
  FinalPopUp,
  Header,
  Play,
  Question,
  AnswersList,
} from '../index';
import { reducer, initState } from '../../reducer';

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
    <div className="container">
      <Header gameLevel={gameLevel} totalScore={totalScore} />
      <Question randomBird={randomBird} correctAnswer={correctAnswer} />

      <div className="row mb2">
        <div className="col-md-6">
          <AnswersList
            onAnswer={onBirdSelected}
            birdCategory={birdConfig[birdCategory]}
            correctBirdId={correctBirdId}
            inCorrectBirdIds={inCorrectBirdIds}
          />
        </div>
        <div className="col-md-6">
          <Details birdInfo={selectedBird} />
        </div>
      </div>

      <Play nextLevel={nextLevel} onNextLevel={onNextLevel} />
    </div>
  );
};
export default App;
