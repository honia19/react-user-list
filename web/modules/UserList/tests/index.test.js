import {
    mapStateToProps,
    mapDispatchToProps,
} from '../index.js';
import * as mockSelectors from '../../../mockData/mockSelectors';
import * as mockActions from '../../../mockData/mockActions';

const state = store.getState();

describe('HOC UserList', () => {
    it('mapStateToProps should return correct selectors', () => {
        const mockMapStateToProps = state => ({
            users: mockSelectors.getUsers(state),
        });
        const expected = mockMapStateToProps(state);

        const actual = mapStateToProps(state);

        assert.deepEqual(actual, expected);
    });

    it('mapDispatchToProps should return correct actions', () => {
        const sandbox = sinon.createSandbox();

        const dispatch = sandbox.spy(store, 'dispatch');
        const mapDispatchToPropsResult = mapDispatchToProps(dispatch);
        const payload = 'testPayload';
        Object.keys(mapDispatchToPropsResult).forEach(key => mapDispatchToPropsResult[key](payload));

        assert.equal(dispatch.callCount, 3);

        let call = dispatch.getCall(0);
        assert.deepEqual(mockActions.getUserRequests(payload), call.args[0]);
        call = dispatch.getCall(1);
        assert.deepEqual(mockActions.createUserRequest(payload), call.args[0]);
        call = dispatch.getCall(2);
        assert.deepEqual(mockActions.deleteUserRequest(payload), call.args[0]);

        sandbox.restore();
    });
});
