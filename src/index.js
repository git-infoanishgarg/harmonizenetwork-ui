import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from "redux-promise";
import createSagaMiddleware from "redux-saga";
import Routes from './routes';
import reducers from './reducers/index';
import "./index.css";
import "./responsive.css";
import "./awesomeinput.css";
import { watchFetchStories } from "./components/Home/redux/sagas";

const sagaMiddleware = createSagaMiddleware();

// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchStories);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();