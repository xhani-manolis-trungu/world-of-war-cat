import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cardReducer from './reducers/cardReducer';

const reducers = combineReducers({
    cardReducer: cardReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;