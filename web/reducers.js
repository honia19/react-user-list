import constants from './constants/constants';

const initialState = {
    items: [],
};
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_USERS_SUCCESS: return {
            ...state,
          items: action.payload,
        };
        default: return state;
    }
};