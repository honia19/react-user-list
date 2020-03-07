import * as actions from '../actions';
import * as mockActions from '../mockData/mockActions';

describe('Main actions', () => {
    it('action setUserSuccess', () => {
        assert.deepEqual(actions.setUserSuccess({}), mockActions.setUserSuccess({}));
    });
});