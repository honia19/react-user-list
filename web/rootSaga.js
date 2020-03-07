import { takeEvery, call, put, fork, all, takeLatest } from 'redux-saga/effects';
import constants from './constants/constants';
import * as api from './api/api';
import 'regenerator-runtime/runtime';
import * as actionStore from './actions';

export function* watchUsersActions () {
    yield takeEvery(constants.GET_USERS_REQUEST, getUsers);
}

export function* watchUserCreate () {
    yield takeLatest(constants.CREATE_USERS_REQUEST, createUser);
}

export function* watchUserDelete () {
    yield takeEvery(constants.DELETE_USERS_REQUEST, deleteUser);
}

export function* getUsers() {
    const result = yield call(api.getUsers);
    Object.keys(result).length && (yield put(actionStore.setUserSuccess(result.data.data)));
}

export function* createUser(action) {
    if (action.payload) {
        yield call(api.createNewUser, action.payload);
        yield call(getUsers);
    }
}

export function* deleteUser(action) {
    if (action.payload) {
        yield call(api.deleteUser, action.payload);
        yield call(getUsers);
    }
}

const usersSagas = [
    fork(watchUserCreate),
    fork(watchUserDelete),
    fork(watchUsersActions),
];

export default function* rootSagas () {
    yield all([
        ...usersSagas,
    ])
}