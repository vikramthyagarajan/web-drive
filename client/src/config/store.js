import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk';
import { State } from '../state';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = composeEnhancers(applyMiddleware(Thunk))
let store = createStore(State, middleware);

export default store;