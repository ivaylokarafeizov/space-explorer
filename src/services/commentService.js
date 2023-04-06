import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/space/comments';
const request = requestFactory();

export const getAll = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return Object.values(result);
};

export const create = async (postId, data) => {
    console.log(data);
    if (!data.comment || !data.name) {
        alert('All fields are required!');
        return;
    }

    const result = await request.post(`${baseUrl}/${postId}`, data);

    return result;
};
