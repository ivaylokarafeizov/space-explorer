import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/space/comments';
const request = requestFactory();

export const getAll = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return Object.values(result);
};

export const getComment = async (postId, commentId) => {
    const result = await request.get(`${baseUrl}/${postId}/${commentId}`);

    return result;
};

export const edit = (postId, commentId, data) => {
    request.put(`${baseUrl}/${postId}/${commentId}`, data);
};

export const create = async (postId, data) => {
    if (!data.comment || !data.name) {
        alert('All fields are required!');
        return;
    }

    const result = await request.post(`${baseUrl}/${postId}`, data);

    return result;
};

export const deleteComment = (postId, commentId) =>
    request.delete(`${baseUrl}/${postId}/${commentId}`);
