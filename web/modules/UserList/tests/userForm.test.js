import UserForm from '../components/UserForm/UserForm.jsx';

describe('UserForm create snapshot', () => {
    const props = {
        callback: () => {},
    };

    it('UserList snapshot should render correctly', () => {
        const сomponent = shallow(
            <UserForm {...props}/>
        );
        expect(сomponent).matchSnapshot();
    });
});

describe('handleChangeFirstName methods', () => {
    const props = {
        callback: () => {},
    };

    it('handleChangeFirstName should set test', () => {
        const component = new UserForm(props);
        const event = {
            target: {
                value: 'test',
            }
        };

        component.handleChangeFirstName(event);

        assert.strictEqual(component.firstName, 'test');
    });
});

describe('handleChangeLastName methods', () => {
    const props = {
        callback: () => {},
    };

    it('handleChangeLastName should set test', () => {
        const component = new UserForm(props);
        const event = {
            target: {
                value: 'test',
            }
        };

        component.handleChangeLastName(event);

        assert.strictEqual(component.lastName, 'test');
    });
});

describe('createUserCallback methods', () => {
    let props;
    let sandbox;

    before(() => {
        sandbox = sinon.createSandbox();
        props = {
            callback: sandbox.stub(),
        };
    });

    afterEach(() => {
        sandbox.resetHistory();
    });

    after(() => {
        sandbox.restore();
    });

    it('createUserCallback should be called', () => {
        const propsLocal = {
            callback: sinon.stub(),
        };
        const component = new UserForm(propsLocal);
        component.firstNameRef = {
            current: {
                value: '',
            }
        };
        component.lastNameRef = {
            current: {
                value: '',
            }
        };

        component.createUserCallback();

        sinon.assert.called(propsLocal.callback);
    });
});