import { createAction } from '@reduxjs/toolkit';
import { requestSubjectAddMessage, requestSubjectCreate, requestSubjectGetById, requestSubjectGetList, requestSubjectGetMessage } from '../../api/subject-api';


export const subjectListLoading = createAction('subject/listloading');
export const subjectListResult = createAction('subject/listResult');
export const subjectListError = createAction('subject/listError');

export const subjectDetailLoading = createAction('subject/detailloading');
export const subjectDetailResult = createAction('subject/detailResult');
export const subjectDetailError = createAction('subject/detailError');

export const subjectCreateSuccess = createAction('subject/createSuccess');
export const subjectCreateError = createAction('subject/createError');

export const subjectAddMessageSuccess = createAction('subject/addMessageSuccess');
export const subjectAddMessageError = createAction('subject/addMessageError');


export const subjectFetchList = () => {
    return (dispatch) => {
        dispatch(subjectListLoading());

        requestSubjectGetList()
            .then(result => {
                dispatch(subjectListResult(result));
            })
            .catch((error) => {
                dispatch(subjectListError(error?.message));
            });
    };
};

export const subjectFetchDetail = (subjectId) => {
    return async (dispatch, getState) => {
        dispatch(subjectDetailLoading());

        try {
            let subject;

            // Check if data exists in store
            const storeSubject = getState().subject.list.data.find(s => s.id === subjectId);

            if (storeSubject) {
                // Si les données dans le store sont présente, on clone l'objet
                subject = { ...storeSubject };
            }
            else {
                // Load data by request API
                subject = await requestSubjectGetById({ subjectId });
            }

            // Add message of subject
            subject.messages = await requestSubjectGetMessage({ subjectId: subject.id });

            dispatch(subjectDetailResult(subject));
        }
        catch (error) {
            dispatch(subjectDetailError(error?.message));
        }
    };
};

export const subjectCreate = (name, content, categories) => {
    return (dispatch, getState) => {
        const userToken = getState().user.token;

        requestSubjectCreate({ userToken, name, content, categories })
            .then(result => {
                dispatch(subjectCreateSuccess(result));
            })
            .catch((error) => {
                dispatch(subjectCreateError(error?.message));
            });
    };
};

export const subjectAddMessage = (subjectId, content) => {
    return (dispatch, getState) => {
        const userToken = getState().user.token;

        requestSubjectAddMessage({ userToken, subjectId, content })
            .then(result => {
                dispatch(subjectAddMessageSuccess(result));
            })
            .catch((error) => {
                dispatch(subjectAddMessageError(error?.message));
            });
    };
};
