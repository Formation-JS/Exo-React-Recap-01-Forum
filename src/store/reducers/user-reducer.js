import { createReducer } from '@reduxjs/toolkit';
import { userClearError, userLogout, userSendError, userSetToken } from '../actions/user-action';

const initialState = {
    token: null,
    expire: null,
    pseudo: null,
    isAdmin: null,
    error: null
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userSetToken.type, (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        })
        .addCase(userLogout.type, (state, action) => {
            return {
                ...initialState
            };
        })
        .addCase(userSendError.type, (state, action) => {
            return {
                ...state,
                error: action.payload
            };
        })
        .addCase(userClearError.type, (state, action) => {
            return {
                ...state,
                error: null
            };
        });
    // .addDefaultCase((state) => {
    //     return state;
    // });
});

export default userReducer;