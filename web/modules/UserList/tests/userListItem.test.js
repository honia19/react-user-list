import UserListItemMemo from '../components/UserListItem/UserListItem.jsx';

const UserListItem = UserListItemMemo.type;

describe('UserListItem create snapshot', () => {
    const props = {
        users: [
            {
                id: 1,
                firstName: 'Vasia',
                lastName: 'Vasia'
            }
        ],
        callback: () => {},
    };

    it('UserList snapshot should render correctly', () => {
        const сomponent = shallow(
            <UserListItem {...props}/>
        );
        expect(сomponent).matchSnapshot();
    });

    it('UserList should be button clicked', () => {
        const localProps = { ...props, callback: sinon.stub() };
        const сomponent = shallow(
            <UserListItem {...localProps}/>
        );
        const deleteButton = сomponent.find('#deleteUser');
        deleteButton.simulate('click');

        sinon.assert.calledWith(localProps.callback, 1);
    });
});