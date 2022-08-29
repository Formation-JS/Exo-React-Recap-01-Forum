import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestSubjectAddMessage, requestSubjectCreate, requestSubjectGetById, requestSubjectGetList, requestSubjectGetMessage } from '../../api/subject-api';


export const subjectFetchList = createAsyncThunk(
    'subject/list',
    async () => {
        const result = await requestSubjectGetList();
        return result;
    }
);

export const subjectFetchDetail = createAsyncThunk(
    'subject/detail',
    async (subjectId, { getState }) => {
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

        return subject;
    }
);

export const subjectCreate = createAsyncThunk(
    'subject/create',
    async ({ name, content, categories }, { getState }) => {
        const userToken = getState().user.token;

        const result = await requestSubjectCreate({ userToken, name, content, categories });
        return result;
    }
);

export const subjectAddMessage = createAsyncThunk(
    'subject/addMessage',
    async ({ subjectId, content }, { getState }) => {
        const userToken = getState().user.token;

        const result = await requestSubjectAddMessage({ userToken, subjectId, content });
        return result;
    }
);
