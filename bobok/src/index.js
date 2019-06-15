import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, combineReducers, applyMiddleware, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import infomationReducer from './store/reducers/infomationReducer';

const rootReducer = combineReducers({
    information: infomationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
