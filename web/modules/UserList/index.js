import Component from './UserList.jsx';
import { connect } from 'react-redux';
import actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    users: selectors.getUsers(state),
});

export const mapDispatchToProps = dispatch => ({
    getUserRequests: () => dispatch(actions.getUserRequests()),
    createUserRequests: payload => dispatch(actions.createUserRequest(payload)),
    deleteUserRequests: payload => dispatch(actions.deleteUserRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);