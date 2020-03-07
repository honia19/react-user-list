import UserList from '../UserList.jsx';

describe('UserList create snapshot', () => {
    const props = {
        users: [],
        getUserRequests: () => {},
        deleteUserRequests: () => {},
        createUserRequests: () => {},
    };

    it('UserList snapshot should render correctly', () => {
        const сomponent = shallow(
            <UserList {...props}/>
        );
        expect(сomponent).matchSnapshot();
    });
});