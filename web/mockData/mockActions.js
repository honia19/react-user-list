//Main
export const setUserSuccess = payload => ({ type: 'set_users_success', payload: payload });

//UserList
export const getUserRequests = () => ({ type: 'get_users_request'});
export const createUserRequest = payload => ({ type: 'create_users_request', payload });
export const deleteUserRequest = payload => ({ type: 'delete_users_request', payload });