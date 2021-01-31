import { SELECT_BIRD_FROM_CATALOG } from '../birdCatalog/types';

const selectBirdFromCatalog = (selectedBird) => ({
  type: SELECT_BIRD_FROM_CATALOG,
  selectedBird,
});

export { selectBirdFromCatalog };
