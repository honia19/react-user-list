import React from 'react';
import {
    Form,
    Label,
    Input,
    Button,
    FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { WrapperStrap } from './styledComponents';

const StrapForm = props => {
    const {
        lastNameRef,
        firstNameRef,
        createUserCallback,
        handleChangeLastName,
        handleChangeFirstName,
    } = props;

    return(
        <WrapperStrap>
            <Form>
                <FormGroup>
                    <Label>
                        First Name
                    </Label>
                    <Input innerRef = {firstNameRef} onChange={handleChangeFirstName} required placeholder="First name" />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last Name
                    </Label>
                    <Input innerRef = {lastNameRef} onChange={handleChangeLastName} required placeholder="Last name"/>
                </FormGroup>
                <Button block outline color="primary" onClick={createUserCallback}>
                    Create
                </Button>
            </Form>
        </WrapperStrap>
    );
};

StrapForm.propTypes = {
    lastNameRef: PropTypes.object,
    firstNameRef: PropTypes.object,
    createUserCallback: PropTypes.func.isRequired,
    handleChangeLastName: PropTypes.func.isRequired,
    handleChangeFirstName: PropTypes.func.isRequired,
};

export default React.memo(StrapForm);