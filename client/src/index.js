import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root'));

console.log("Stripe key is", process.env.REACT_APP_STRIPE_KEY);
console.log("Env is", process.env.NODE_ENV);

/*const appState = {
    value: 0,
    history: []
}

const mathReducer = (state = appState, action) => {
    let newState = {};

    switch(action.type) {
        case "add":
            newState = {
                value: state.value + action.payload
            }
            newState.history = [...state.history, action.payload]
            break;
        case "sub":
            newState = {
                value: state.value - action.payload
            }
            newState.history = [...state.history, action.payload]
            break;
        default:
            newState = {
                ...state,
                value: 0
            }
            break;
    }

    return newState;
}

const userReducer = (state = {age: 18}, action ) => {
    switch(action.type) {
        case "ADD_AGE":
            state = {age: state.age + action.payload}
    }

    return state;
}

const store = createStore(combineReducers({userReducer, mathReducer}));

store.dispatch({
    type: "add",
    payload: 10
})

console.log(store.getState());

store.dispatch({
    type: "sub",
    payload: 2
})

console.log(store.getState());

store.dispatch({
    type: "lon",
    payload: 2
})

console.log(store.getState());

store.dispatch({
    type: "ADD_AGE",
    payload: 10
})

console.log(store.getState());*/
