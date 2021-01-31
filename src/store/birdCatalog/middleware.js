import { birdsService } from '../index';
import { LOAD_ALL_BIRDS } from '../birdCatalog/types';

const loadAllBirds = () => {
  return async (dispatch) => {
    const birds = await birdsService.getBirds();
    dispatch({
      type: LOAD_ALL_BIRDS,
      birds,
    });
  };
};

export { loadAllBirds };
