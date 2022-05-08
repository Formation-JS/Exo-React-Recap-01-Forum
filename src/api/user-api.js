import { getAxios } from './_helper';
import { errorMapper } from './_mapper';

export const requestUserLogin = ({ identifier, password }) => {
    const urlLogin = '/auth/login';

    return getAxios()
        .post(urlLogin, { identifier, password })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};

export const requestUserRegister = ({ pseudo, email, password }) => {
    const urlRegister = '/auth/register';

    return getAxios()
        .post(urlRegister, { pseudo, email, password })
        .then(({ data }) => data)
        .catch((error) => {
            throw errorMapper(error);
        });
};
