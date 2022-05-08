import { createAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { requestUserLogin, requestUserRegister } from '../../api/user-api';

export const userSetToken = createAction('user/token', ({ token, expire }) => {
    const { pseudo, isAdmin } = jwtDecode(token);
    return {
        payload: { token, expire, pseudo, isAdmin }
    };
});
export const userLogout = createAction('user/logout');
export const userSendError = createAction('user/sendError');
export const userClearError = createAction('user/clearError');

export const userLogin = ({ identifier, password }) => {
    return (dispatch) => {
        requestUserLogin({ identifier, password })
            .then((data) => {
                dispatch(userSetToken(data));
            }).catch((error) => {
                dispatch(userSendError(error));
            });
    };
};

export const userRegister = ({ pseudo, email, password }) => {
    return async (dispatch) => {
        try {
            const data = await requestUserRegister({ pseudo, email, password });
            dispatch(userSetToken(data));
        }
        catch (error) {
            dispatch(userSendError(error));
        }
    };
};