import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import bookreducer from './Books/bookreducer';

const middlewares = [thunk]; 

export const Store = createStore(bookreducer, applyMiddleware(...middlewares));