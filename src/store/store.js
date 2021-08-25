
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { authRducer } from '../reducers/authRducer'
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authRducer,
    ui: uiReducer,
    notes: notesReducer
    

})

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk)) 
    
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )