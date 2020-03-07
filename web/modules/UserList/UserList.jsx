import React, { PureComponent } from 'react';
import UserListItem from './components/UserListItem/UserListItem.jsx';
import { Wrapper } from './styledComponents';
import UserForm from './components/UserForm/UserForm.jsx';
import PropTypes from 'prop-types';

export default class UserList extends PureComponent {
    static propTypes = {
        users: PropTypes.array.isRequired,
        getUserRequests: PropTypes.func.isRequired,
        deleteUserRequests: PropTypes.func.isRequired,
        createUserRequests: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { getUserRequests } = this.props;

        getUserRequests();
    }

    render () {
        const {
            users,
            deleteUserRequests,
            createUserRequests,
        } = this.props;

        return (
            <Wrapper>
                <UserForm callback = {createUserRequests}/>
                <UserListItem
                    users = {users}
                    callback = {deleteUserRequests}
                />
            </Wrapper>
        );
    }
}