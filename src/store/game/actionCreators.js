import {
  SELECT_RANDOM_BIRD,
  ON_SELECT_ANSWER,
  ON_NEXT_LEVEL,
  ON_PLAY_AGAIN,
} from '../game/types';

const maxBirdInConfig = 6;
const minBirdInConfig = 1;

const selectRandomBird = (birds) => {
  const randomNum =
    Math.floor(Math.random() * maxBirdInConfig) + minBirdInConfig;
  return (dispatch) => {
    const randomBird = birds.find((bird) => {
      return bird.id === randomNum;
    });
    dispatch({
      type: SELECT_RANDOM_BIRD,
      randomBird,
    });
  };
};

const onSelectAnswer = (selectedBird) => ({
  type: ON_SELECT_ANSWER,
  selectedBird,
});

const onNextLevel = () => ({ type: ON_NEXT_LEVEL });

const onPlayAgain = () => {
  const randomNum =
    Math.floor(Math.random() * maxBirdInConfig) + minBirdInConfig;
  return {
    type: ON_PLAY_AGAIN,
    randomNum,
  };
};

export { selectRandomBird, onSelectAnswer, onNextLevel, onPlayAgain };
