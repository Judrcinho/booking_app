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