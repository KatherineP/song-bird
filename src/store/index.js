import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BirdsService from '../services';
import { reducer } from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));
const birdsService = new BirdsService();

export default store;
export { birdsService };
