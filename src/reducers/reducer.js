import birdCatalogReducer from './birdCatalog';
import gameReducer from './game';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  game: gameReducer,
  birdCatalog: birdCatalogReducer,
});
