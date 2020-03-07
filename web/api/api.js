import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

export const getUsers = () => {
  return axios.get('/users', {
      params: {
        limit: 1000,
      },
  })
};

export const createNewUser = userObject => {
    const {
        lastName,
        firstName,
    } = userObject;

    return axios.post('/users', {
        lastName,
        firstName,
    })
};

export const deleteUser = userId => {
    return axios.delete(`/users/${userId}`);
};