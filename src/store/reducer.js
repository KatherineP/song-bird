import birdCatalogReducer from './birdCatalog/reducers';
import gameReducer from './game/reducers';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  game: gameReducer,
  birdCatalog: birdCatalogReducer,
});
