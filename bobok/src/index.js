import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import {createStore, combineReducers, applyMiddleware, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";

import infomationReducer from './store/reducers/infomationReducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    information: infomationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, routerMiddleware(history)));

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
