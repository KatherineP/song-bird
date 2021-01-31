import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import BirdsService from '../services';
import { reducer } from './reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const birdsService = new BirdsService();

export default store;
export { birdsService };
