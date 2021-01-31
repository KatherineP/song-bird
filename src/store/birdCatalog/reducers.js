import { LOAD_ALL_BIRDS, SELECT_BIRD_FROM_CATALOG } from './types';

const initStateBirdCatalog = {
  birds: [],
  selectedBird: {},
};

export function birdCatalogReducer(state = initStateBirdCatalog, action) {
  switch (action.type) {
    case LOAD_ALL_BIRDS:
      return { ...state, birds: action.birds };
    case SELECT_BIRD_FROM_CATALOG:
      return { ...state, selectedBird: action.selectedBird };
    default:
      return state;
  }
}

export default birdCatalogReducer;
