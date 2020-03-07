import {reducers} from '../reducers';

describe('reducer should return new state', () => {
    it('action set_users_success', () => {
        const action = {
          type: 'set_users_success',
          payload: [{
              firstName: 'Vasia',
          }],
        };
        const expected = [{
            firstName: 'Vasia',
        }];

        const actual = reducers([], action);

        expect(actual.items).to.deep.equal(expected);
    });

    it('action set_users_success', () => {
        const action = {
            type: 'set_test',
            payload: [{
                firstName: 'Vasia',
            }],
        };
        const expected = [];

        const actual = reducers([], action);

        assert.deepStrictEqual(actual, expected);
    });
});