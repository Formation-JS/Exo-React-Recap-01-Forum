import { createReducer } from '@reduxjs/toolkit';
import { subjectAddMessage, subjectCreate, subjectFetchDetail, subjectFetchList } from '../actions/subject-action';

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
        .addCase(subjectFetchList.pending, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                loading: true,
                error: null
            }
        }))
        .addCase(subjectFetchList.fulfilled, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                count: action.payload.count,
                data: action.payload.data   // TODO Dynamic data with pagination
            }
        }))
        .addCase(subjectFetchList.rejected, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                error: action.error.message
            }
        }))
        // create subject
        .addCase(subjectCreate.fulfilled, (state, action) => ({
            ...state,
            list: {
                data: [...state.list.data, action.payload],
                count: state.list.count + 1
            }
        }))
        .addCase(subjectCreate.rejected, (state, action) => ({
            ...state,
            list: {
                ...state.list,
                error: action.error.message
            }
        }))
        // fetch detail
        .addCase(subjectFetchDetail.pending, (state, action) => ({
            ...state,
            detail: {
                loading: true,
                data: null,
                error: null
            }
        }))
        .addCase(subjectFetchDetail.fulfilled, (state, action) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                data: action.payload,
            }
        }))
        .addCase(subjectFetchDetail.rejected, (state, action) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                error: action.error.message
            }
        }))
        // add message
        .addCase(subjectAddMessage.fulfilled, (state, action) => {
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
                            count: state.detail.data.messages.count + 1
                        }
                    }
                }
            };
        })
        .addCase(subjectAddMessage.rejected, (state, action) => {
            // TODO Handled the error
            return state;
        });
});

export default subjectReducer;