import { birdsService } from '../index';
import {
  LOAD_ALL_BIRDS,
  LOAD_SELECTED_BIRD_FROM_CATALOG,
} from '../birdCatalog/types';

const loadAllBirds = () => {
  return async (dispatch) => {
    const birds = await birdsService.getBirds();
    const result = [].concat(...birds);
    dispatch({
      type: LOAD_ALL_BIRDS,
      birds: result,
    });
  };
};

const loadSelectedBird = (selectedBirdName) => {
  return async (dispatch) => {
    const selectedBird = await birdsService.getSelectedBird(selectedBirdName);
    dispatch({
      type: LOAD_SELECTED_BIRD_FROM_CATALOG,
      selectedBird,
    });
  };
};

export { loadAllBirds, loadSelectedBird };
