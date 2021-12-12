import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducer";
import { actionTypes } from './constants';
import {logger} from 'redux-logger';

const myLogger = (store) => (next) => (action) => {
      return next(action)
};

const secondMiddleware = (store) => (next) => (action) => {
    return next(action);
}

const thirdMiddleware = (store) => (next) => (action) => {
    if(store.getState() >= 5) {
        return next({type: actionTypes.DECREMENT});
    }
    
    next(action);
}


const store = createStore(counterReducer, applyMiddleware(myLogger, secondMiddleware, thirdMiddleware, logger));

export default store;
