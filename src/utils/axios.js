import deafultAxios from 'axios';

const axios = () => deafultAxios.create({
    baseURL: 'https://e-commerce-api-v2.academlo.tech/api/v1',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export default axios;