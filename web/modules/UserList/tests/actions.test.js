import * as actions from '../actions';
import * as mockActions from '../../../mockData/mockActions';

describe('UserList actions', () => {
    it('action getUserRequests', () => {
        assert.deepEqual(actions.getUserRequests({}), mockActions.getUserRequests({}));
    });

    it('action createUserRequest', () => {
        assert.deepEqual(actions.createUserRequest({}), mockActions.createUserRequest({}));
    });

    it('action deleteUserRequest', () => {
        assert.deepEqual(actions.deleteUserRequest({}), mockActions.deleteUserRequest({}));
    });
});