import { birdsData } from './config';
const maxBirdInConfig = 6;
const minBirdInConfig = 1;
const randomNum = Math.floor(Math.random() * maxBirdInConfig) + minBirdInConfig;

const initState = {
  gameLevel: 0,
  nextLevel: false,
  birdCategory: 0,
  selectedBird: {},
  randomBirdId: randomNum,
  correctAnswer: false,
  totalScore: 0,
  scorePerRound: 5,
  correctBirdId: null,
  inCorrectBirdIds: [],
  birdConfig: birdsData,
};

const onBirdSelected = (state, id, randomBird) => {
  const {
    birdConfig,
    birdCategory,
    totalScore,
    inCorrectBirdIds,
    scorePerRound,
  } = state;

  const bird = birdConfig[birdCategory].find((bird) => bird.id === id);

  if (bird.id === randomBird.id) {
    const total = totalScore + scorePerRound;
    return {
      ...state,
      correctBirdId: bird.id,
      nextLevel: true,
      selectedBird: bird,
      totalScore: total,
      correctAnswer: true,
    };
  }
  const roundScore = scorePerRound - 1;
  const incorrectBirds = [...inCorrectBirdIds, bird.id];
  return {
    ...state,
    selectedBird: bird,
    inCorrectBirdIds: incorrectBirds,
    scorePerRound: roundScore,
  };
};

const onNextLevel = (state) => {
  const {
    birdCategory,
    gameLevel,
    birdConfig,
    randomBirdId,
    totalScore,
  } = state;

  const updatedGameLevel = gameLevel + 1;
  const updatedBirdCategory = birdCategory + 1;

  return birdCategory !== birdConfig.length - 1
    ? {
        ...initState,
        randomBirdId: randomBirdId,
        totalScore: totalScore,
        birdCategory: updatedBirdCategory,
        gameLevel: updatedGameLevel,
      }
    : {
        ...initState,
        randomBirdId: randomBirdId,
        totalScore: totalScore,
        gameLevel: updatedGameLevel,
      };
};

const onPlayAgain = () => {
  return {
    ...initState,
    randomBirdId: Math.floor(Math.random() * maxBirdInConfig) + minBirdInConfig,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onBirdSelected':
      return onBirdSelected(state, action.payload, action.randomBird);
    case 'onNextLevel':
      return onNextLevel(state);
    case 'onPlayAgain':
      return onPlayAgain();
    default:
      return state;
  }
};

export { reducer, initState };
