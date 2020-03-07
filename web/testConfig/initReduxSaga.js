import { applyMiddleware, createStore } from 'redux';
import rootSaga from '../rootSaga';
import { reducers } from '../reducers';
import createSagaMiddleware from 'redux-saga';

const initialState = {
    items: [],
};

const sagaMiddleware = createSagaMiddleware();

global.store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
