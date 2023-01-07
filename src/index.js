import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

const defaultState = {
    cash: 500
}

const reducer = (state = defaultState,action) => {
    switch(action.type) {
        case 'ADD_MONEY':
            return {...state, cash: state.cash + action.payload}

        case 'GET_MONEY': 
            return {...state, cash: state.cash - action.payload}

        default: return state
    }
}

const bankStore = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={bankStore}>
            <App />
        </Provider>
    </React.StrictMode>
);