import { getSortedName } from '../logic';

describe('getSortedName', () => {
    it('getSortedName should be return empty array', () => {
        const users = [];

        const actual = getSortedName(users);

        assert.deepEqual(actual, []);
    });

    it('getSortedName should be return sorted array', () => {
        const users = [
            { firstName: 'Edward', id: 21 },
            { firstName: 'Sharpe', id: 37 },
            { firstName: 'And', id: 45 },
            { firstName: 'And', id: 46 },
            { firstName: 'The', id: 12 },
            { firstName: 'Magnetic', id: 13 },
            { firstName: 'Zeros', id: 37 }
        ];
        const expected = [
            { firstName: 'And', id: 45 },
            { firstName: 'And', id: 46 },
            { firstName: 'Edward', id: 21 },
            { firstName: 'Magnetic', id: 13 },
            { firstName: 'Sharpe', id: 37 },
            { firstName: 'The', id: 12 },
            { firstName: 'Zeros', id: 37 }
        ];

        const actual = getSortedName([...users]);

        assert.deepEqual(actual, expected);
    });
});