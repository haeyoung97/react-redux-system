import * as ActionTypes from '../actionTypes';

export const setAdminSession = (params) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.eSESSION_ADMIN, eSESSION: params });
        return true;
    }
};

export const setSession = (params) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.eSESSION, eSESSION: params });
        return true;
    }
};

// uuid 지정
export const setUUID = (params) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.UUID, UUID: params });
        return true;
    }
};

