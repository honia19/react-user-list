import React, { PureComponent } from 'react';
import { Wrapper } from './styledComponents';
import StrapForm from './components/StrapForm.jsx';
import PropTypes from 'prop-types';

export default class UserForm extends PureComponent {
    static propTypes = {
        callback: PropTypes.func.isRequired,
    };

    lastNameRef = React.createRef();
    firstNameRef = React.createRef();

    lastName = null;
    firstName = null;

    createUserCallback = () => {
        const { callback } = this.props;
        const {
            lastName,
            firstName,
            lastNameRef,
            firstNameRef,
        } = this;

        callback({
         lastName,
         firstName,
        });

        lastNameRef.current.value = '';
        firstNameRef.current.value = '';
    };

    handleChangeFirstName = event => {
        this.firstName = event.target.value;
    };

    handleChangeLastName = event => {
        this.lastName = event.target.value;
    };

    render() {
        const {
            lastNameRef,
            firstNameRef,
            createUserCallback,
            handleChangeLastName,
            handleChangeFirstName,
        } = this;

        return (
            <Wrapper>
                <StrapForm
                    lastNameRef={lastNameRef}
                    firstNameRef={firstNameRef}
                    createUserCallback={createUserCallback}
                    handleChangeLastName={handleChangeLastName}
                    handleChangeFirstName={handleChangeFirstName}
                />
            </Wrapper>
        );
    }
};