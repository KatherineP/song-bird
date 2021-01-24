import {
  LOAD_BIRD_CATEGORIES,
  LOAD_BIRDS_FROM_CATEGORY,
  SELECT_RANDOM_BIRD,
  ON_SELECT_ANSWER,
  ON_NEXT_LEVEL,
  ON_PLAY_AGAIN,
} from './types';

const initState = {
  gameLevel: 0,
  selectedBird: {},
  correctAnswer: false,
  totalScore: 0,
  scorePerRound: 5,
  correctBirdId: null,
  inCorrectBirdIds: [],
  categories: [],
  birdsFromCategory: [],
  randomBird: {},
  loading: true,
};

const onSelectAnswer = (state, selectedBird) => {
  const { totalScore, inCorrectBirdIds, scorePerRound, randomBird } = state;
  const { id } = selectedBird;
  return id === randomBird.id
    ? {
        ...state,
        selectedBird,
        nextLevel: true,
        correctAnswer: true,
        totalScore: totalScore + scorePerRound,
        correctBirdId: id,
      }
    : {
        ...state,
        selectedBird,
        inCorrectBirdIds: [...inCorrectBirdIds, id],
        scorePerRound: scorePerRound - 1,
      };
};

const onNextLevel = (state) => {
  const { gameLevel, totalScore } = state;

  return {
    ...initState,
    totalScore: totalScore,
    gameLevel: gameLevel + 1,
  };
};

const onPlayAgain = (randomNum) => {
  return {
    ...initState,
    randomBirdId: randomNum,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_BIRD_CATEGORIES:
      return { ...state, categories: action.categories, loading: false };
    case LOAD_BIRDS_FROM_CATEGORY:
      return {
        ...state,
        birdsFromCategory: action.birdsFromCategory,
        loading: false,
      };
    case SELECT_RANDOM_BIRD:
      return {
        ...state,
        randomBird: action.randomBird,
      };
    case ON_SELECT_ANSWER:
      return onSelectAnswer(state, action.selectedBird);
    case ON_NEXT_LEVEL:
      return onNextLevel(state);
    case ON_PLAY_AGAIN:
      return onPlayAgain(action.randomNum);
    default:
      return state;
  }
};

export default reducer;
