import { combineReducers, createStore, applyMiddleware } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    cart: cartReducer
})

const initiaState = {}
const middleware = [thunk];


export const store = createStore(rootReducer, initiaState, composeWithDevTools(applyMiddleware(...middleware)))