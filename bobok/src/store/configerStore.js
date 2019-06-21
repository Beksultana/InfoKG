import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import informationReducer from "./reducers/infomationReducer";
import thunkMiddleware from "redux-thunk";
import {loadState, saveState} from "./localStorage";
import axios from '../axios-api';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    information: informationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        information: {
            user: store.getState().information.user
        }
    });
});

axios.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = store.getState().information.user.token;
    }catch (e) {
        //do nothing no token exists
    }

    return config;
});

export default store;