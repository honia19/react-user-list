import constants from '../../constants/constants';

export const getUserRequests = () => ({ type: constants.GET_USERS_REQUEST });
export const createUserRequest = payload => ({ type: constants.CREATE_USERS_REQUEST, payload });
export const deleteUserRequest = payload => ({ type: constants.DELETE_USERS_REQUEST, payload });

export default {
    getUserRequests,
    createUserRequest,
    deleteUserRequest,
}
