import React from 'react';
import {
    Button,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import {
    Wrapper,
    UserInfo,
    DetailInfo,
} from './styledComponents';
import PropTypes from 'prop-types';
import { getSortedName } from '../../logic';

const UserListItem = props => {
    const {
        users,
        callback,
    } = props;
    const sortedFirstName = getSortedName([...users]);

    return (
        <Wrapper>
            <ListGroup>
                {
                    sortedFirstName.map(user => {
                        return (
                            <ListGroupItem key={user.id}>
                                <Wrapper.UserInfo>
                                    <UserInfo.DetailInfo>
                                        <DetailInfo.firstName>
                                            { user.firstName }
                                        </DetailInfo.firstName>
                                        <DetailInfo.lastName>
                                            { user.lastName }
                                        </DetailInfo.lastName>
                                    </UserInfo.DetailInfo>
                                    <UserInfo.DeleteButton>
                                        <Button id="deleteUser" outline color="danger" onClick={() => {callback(user.id)}}>
                                            Delete
                                        </Button>
                                    </UserInfo.DeleteButton>
                                </Wrapper.UserInfo>
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
        </Wrapper>
    );
};

UserListItem.propTypes = {
    users: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired,
};

export default React.memo(UserListItem);