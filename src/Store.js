import { composeWithDevTools } from '@redux-devtools/extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { itemReducers } from './Services/Redux/Reducers/itemReducer'

const rootReducer = combineReducers({
    itemList: itemReducers
})

const initialState = {}

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store
