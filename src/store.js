import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {
    store
};