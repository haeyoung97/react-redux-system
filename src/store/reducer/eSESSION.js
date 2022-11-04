import * as ActionTypes from '../actionTypes';

const initialState = {
    eSESSION: {},
    UUID: null,
};

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.eSESSION:
            return Object.assign({}, state, { eSESSION: action.eSESSION });
        case ActionTypes.eSESSION_ADMIN:
            return Object.assign({}, state, { eSESSION: action.eSESSION });
        case ActionTypes.UUID:
            return Object.assign({}, state, { UUID: action.UUID });
        default:
            return state;
    }
};


