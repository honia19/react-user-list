import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from '../MainComponent.jsx';
import { reducers } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../rootSaga';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
window.store = store;
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('root')
);

