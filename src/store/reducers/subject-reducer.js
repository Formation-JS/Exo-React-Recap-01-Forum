import { createReducer } from '@reduxjs/toolkit';
import { subjectAddMessageError, subjectAddMessageSuccess, subjectCreateError, subjectCreateSuccess, subjectDetailError, subjectDetailLoading, subjectDetailResult, subjectListError, subjectListLoading, subjectListResult } from '../actions/subject-action';

const initialState = {
    list: {
        loading: false,
        data: [],
        count: 0,
        error: null
    },
    detail: {
        loading: false,
        data: null,
        error: null
    }
};

const subjectReducer = createReducer(initialState, (builder) => {
    builder
        // fetch list
        .addCase(subjectListLoading.type, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                loading: true,
                error: null
            }
        }))
        .addCase(subjectListResult.type, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                count: action.payload.count,
                data: action.payload.data   // TODO Dynamic data with pagination
            }
        }))
        .addCase(subjectListError.type, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                error: action.payload
            }
        }))
        // create subject
        .addCase(subjectCreateSuccess.type, (state, action) => ({
            ...state,
            list: {
                data: [...state.list.data, action.payload],
                count: state.list.count + 1
            }
        }))
        .addCase(subjectCreateError.type, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                error: action.payload
            }
        }))
        // fetch detail
        .addCase(subjectDetailLoading.type, (state, action) => ({
            ...state,
            detail: {
                loading: true,
                data: null,
                error: null
            }
        }))
        .addCase(subjectDetailResult.type, (state, action) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                data: action.payload,
            }
        }))
        .addCase(subjectDetailError.type, (state, action) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                error: action.payload
            }
        }))
        // add message
        .addCase(subjectAddMessageSuccess.type, (state, action) => {
            if (!state.detail) {
                return state;
            }

            return {
                ...state,
                detail: {
                    ...state.detail,
                    data: {
                        ...state.detail.data,
                        messages: {
                            data: [action.payload, ...state.detail.data.messages.data],
                            count: state.detail.data.messages.clount +1
                        }
                    }
                }
            };
        })
        .addCase(subjectAddMessageError.type, (state, action) => {
            // TODO Handled the error
            return state;
        });
});

export default subjectReducer;