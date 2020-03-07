import * as saga from '../rootSaga';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import * as mockActions from '../mockData/mockActions';
import * as api from '../api/api';

describe('saga watchUsersActions', () => {
    const generatorWatchUsersActions = saga.watchUsersActions();

    it('watchUsersActions should takeEvery getUserRequests', () => {
        assert.deepEqual(generatorWatchUsersActions.next().value, takeEvery(mockActions.getUserRequests().type, saga.getUsers));
    });

    it('watchUsersActions should finished', () => {
        assert.isTrue(generatorWatchUsersActions.next().done);
    });
});

describe('saga watchUserCreate', () => {
    const generatorWatchUsersActions = saga.watchUserCreate();

    it('watchUserCreate should takeLatest createUserRequest', () => {
        assert.deepEqual(generatorWatchUsersActions.next().value, takeLatest(mockActions.createUserRequest({}).type, saga.createUser));
    });

    it('watchUsersActions should finished', () => {
        assert.isTrue(generatorWatchUsersActions.next().done);
    });
});

describe('saga watchUserDelete', () => {
    const generatorWatchUsersActions = saga.watchUserDelete();

    it('watchUserDelete should takeEvery deleteUserRequest', () => {
        assert.deepEqual(generatorWatchUsersActions.next().value, takeEvery(mockActions.deleteUserRequest({}).type, saga.deleteUser));
    });

    it('watchUserDelete should finished', () => {
        assert.isTrue(generatorWatchUsersActions.next().done);
    });
});

describe('Root saga getUsers', () => {
    let sandbox = null;

    before(() => {
        sandbox = sinon.createSandbox();
    });

    after(() => {
        sandbox.restore();
    });

    const responseStub = {
        data: {
            data: {
                id: 1,
                firstName: 'Test',
            },
        },
    };
    const action = {
        id: 1,
        firstName: 'Test',
    };

    const generator = saga.getUsers();

    it('getUsers should call api method', () => {
        const userStub = sandbox.stub(api, 'getUsers').returns(responseStub);

        assert.deepEqual(
            generator.next().value,
            call(userStub),
        );
    });

    it('getUsers should put action in store', () => {
        assert.deepEqual(
            generator.next(responseStub).value,
            put(mockActions.setUserSuccess(action)),
        );
    });

    it('getUsers should be finished', () => {
        assert.deepEqual(generator.next().done, true);
    });
});

describe('Root saga createUser', () => {
    let sandbox = null;

    before(() => {
        sandbox = sinon.createSandbox();
    });

    after(() => {
        sandbox.restore();
    });

    const responseStub = {
        id: 1,
        firstName: 'Test',
    };
    const action = {
        payload: {
            id: 1,
            firstName: 'Test',
        },
    };

    const generator = saga.createUser(action);

    it('createNewUser should be call api method', () => {
        const userStub = sandbox.stub(api, 'createNewUser').returns(responseStub);

        assert.deepEqual(
            generator.next().value,
            call(userStub, responseStub),
        );
    });

    it('createUser should call getUsers', () => {
        const getUserStub = sandbox.spy(saga, 'getUsers');

        assert.deepEqual(
            generator.next().value,
            call(getUserStub.wrappedMethod)
        );
    });

    it('getUsers should be finished', () => {
        assert.deepEqual(generator.next().done, true);
    });
});

describe('Root saga deleteUser', () => {
    let sandbox = null;

    before(() => {
        sandbox = sinon.createSandbox();
    });

    after(() => {
        sandbox.restore();
    });

    const responseStub = {
        id: 1,
        firstName: 'Test',
    };
    const action = {
        payload: {
            id: 1,
            firstName: 'Test',
        },
    };

    const generator = saga.deleteUser(action);

    it('deleteUser should be call api method', () => {
        const userStub = sandbox.stub(api, 'deleteUser').returns(responseStub);

        assert.deepEqual(
            generator.next().value,
            call(userStub, responseStub),
        );
    });

    it('deleteUser should be call getUsers', () => {
        const getUserStub = sandbox.spy(saga, 'getUsers');

        assert.deepEqual(
            generator.next().value,
            call(getUserStub.wrappedMethod)
        );
    });

    it('getUsers should be finished', () => {
        assert.deepEqual(generator.next().done, true);
    });
});