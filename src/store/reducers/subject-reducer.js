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
        .addCase(subjectFetchList.pending, (state) => {
            state.list.loading = true;
            state.list.error = null;
        })
        .addCase(subjectFetchList.fulfilled, (state, action) => {
            state.list.loading = false;
            state.list.count = action.payload.count;
            state.list.data = action.payload.data;   // TODO Dynamic data with pagination
        })
        .addCase(subjectFetchList.rejected, (state, action) => {
            state.list.loading = false;
            state.list.error = action.error.message;
        })
        // create subject
        .addCase(subjectCreate.fulfilled, (state, action) => {
            state.list.data.push(action.payload);
            state.list.count++;
            state.list.error = null;
        })
        .addCase(subjectCreate.rejected, (state, action) => {
            state.list.error = action.error.message;
        })
        // fetch detail
        .addCase(subjectFetchDetail.pending, (state) => {
            state.detail.loading = true;
            state.detail.data = null;
            state.detail.error = null;
        })
        .addCase(subjectFetchDetail.fulfilled, (state, action) => {
            state.detail.loading = false;
            state.detail.data = action.payload;
        })
        .addCase(subjectFetchDetail.rejected, (state, action) => {
            state.detail.loading = false;
            state.detail.error = action.error.message;
        })
        // add message
        .addCase(subjectAddMessage.fulfilled, (state, action) => {
            if (state.detail) {
                state.detail.data.messages.data.unshift(action.payload);
                state.detail.data.messages.count++;
                state.detail.data.error = null;
            }
        })
        .addCase(subjectAddMessage.rejected, (state, action) => {
            if (state.detail) {
                state.detail.data.error = action.error.message;
            }
        });
});

export default subjectReducer;