import axios from 'axios';

export const getAxios = (userToken) => {

    const headers = userToken ? {
        Authorization: `Bearer ${userToken}` 
    } : undefined;

    return axios.create({
        baseURL: process.env.REACT_APP_API_FORUM,
        headers
      });
}