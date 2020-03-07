import * as selectors from '../selectors';
import * as mockSelectors from '../../../mockData/mockSelectors';

describe('UserList selectors', () => {
    const state = store.getState();

    it('getUsers', () => {
        assert.deepEqual(selectors.getUsers(state), mockSelectors.getUsers(state));
    });
});