import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/space/comments';
const request = requestFactory();

export const getAll = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return Object.values(result);
};

export const create = async (comment, postId) => {
    if (!comment) {
        alert('Please enter a comment!');
        return;
    }

    const result = await request.post(baseUrl, { comment, postId });

    return result;
};
