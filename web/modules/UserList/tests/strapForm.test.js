import StrapFormMemo from '../components/UserForm/components/StrapForm.jsx';

const StrapForm = StrapFormMemo.type;

describe('StrapForm create snapshot', () => {
    const props = {
        lastNameRef: {},
        firstNameRef: {},
        createUserCallback: () => {},
        handleChangeLastName: () => {},
        handleChangeFirstName: () => {},
    };

    it('UserList snapshot should render correctly', () => {
        const сomponent = shallow(
            <StrapForm {...props}/>
        );
        expect(сomponent).matchSnapshot();
    });
});