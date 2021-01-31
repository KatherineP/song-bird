import { LOAD_BIRD_CATEGORIES, LOAD_BIRDS_FROM_CATEGORY } from '../game/types';
import { birdsService } from '../index';

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

export { loadBirdCategories, loadBirdsFromCategory };
