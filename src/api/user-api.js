import axios from 'axios';
import { errorMapper } from './_mapper';

export const requestUserLogin = ({ identifier, password }) => {
    const urlLogin = process.env.REACT_APP_API_FORUM + '/auth/login';
    return axios
        .post(urlLogin, { identifier, password })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};

export const requestUserRegister = ({ pseudo, email, password }) => {
    const urlRegister = process.env.REACT_APP_API_FORUM + '/auth/register';
    return axios
        .post(urlRegister, { pseudo, email, password })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};
