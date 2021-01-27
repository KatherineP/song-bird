import BirdsService from '../services';

import {
  LOAD_BIRD_CATEGORIES,
  LOAD_BIRDS_FROM_CATEGORY,
  SELECT_RANDOM_BIRD,
  ON_SELECT_ANSWER,
  ON_NEXT_LEVEL,
  ON_PLAY_AGAIN,
  LOAD_ALL_BIRDS,
  SELECT_BIRD_FROM_CATALOG,
} from '../reducers/types';

const birdsService = new BirdsService();

const maxBirdInConfig = 6;
const minBirdInConfig = 1;

const loadBirdCategories = () => {
  return async (dispatch) => {
    const categories = await birdsService.getBirdsCategories();
    dispatch({
      type: LOAD_BIRD_CATEGORIES,
      categories,
    });
  };
};

const loadBirdsFromCategory = (category) => {
  return async (dispatch) => {
    const birds = await birdsService.getBirdsFromCategory(category);
    dispatch({
      type: LOAD_BIRDS_FROM_CATEGORY,
      birdsFromCategory: birds,
    });
  };
};

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

const loadAllBirds = () => {
  return async (dispatch) => {
    const birds = await birdsService.getBirds();
    dispatch({
      type: LOAD_ALL_BIRDS,
      birds,
    });
  };
};

const selectBirdFromCatalog = (selectedBird) => ({
  type: SELECT_BIRD_FROM_CATALOG,
  selectedBird,
});

export {
  loadBirdCategories,
  loadBirdsFromCategory,
  selectRandomBird,
  onSelectAnswer,
  onNextLevel,
  onPlayAgain,
  loadAllBirds,
  selectBirdFromCatalog,
};
