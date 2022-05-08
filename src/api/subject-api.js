import axios from 'axios';
import { getAxios } from './_helper';
import { errorMapper } from './_mapper';

// TODO Dynamic offset & limit

export const requestSubjectGetList = () => {
    const url = '/subject';
    const offset = 0
    const limit = 50

    return getAxios()
        .get(url, { offset, limit })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};

export const requestSubjectGetById = ({ subjectId }) => {
    const url = '/subject/' + subjectId;
    
    return getAxios()
        .get(url)
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};

export const requestSubjectCreate = ({ userToken, name, content, categories }) => {
    const url = '/subject';

    return getAxios(userToken)
        .post(url, { name, content, categories })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};

export const requestSubjectGetMessage = ({ subjectId }) => {
    const url = '/subject/' + subjectId + '/message';
    const offset = 0
    const limit = 50

    return getAxios()
        .get(url, { offset, limit })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};

export const requestSubjectAddMessage = ({ userToken, subjectId, content }) => {
    const url = '/subject/' + subjectId + '/message';

    return getAxios(userToken)
        .post(url, { content })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};