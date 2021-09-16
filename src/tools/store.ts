// import { create } from 'node:domain';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../components/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;