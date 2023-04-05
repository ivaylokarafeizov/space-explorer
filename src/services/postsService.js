import { requestFactory } from './requester';

let baseUrl = 'http://localhost:3030/jsonstore/space';

export const postsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(`${baseUrl}/posts`);

        return Object.values(result);
    };

    const create = async (postData) => {
        const result = await request.post(`${baseUrl}/posts`, postData);

        return result;
    };

    const getPost = async (postId) => {
        const result = await request.get(`${baseUrl}/posts/${postId}`);

        return result;
    };

    const edit = (postId, data) =>
        request.put(`${baseUrl}/posts/${postId}`, data);

    const deletePost = (postId) => request.delete(`${baseUrl}/posts/${postId}`);

    return {
        getAll,
        getPost,
        create,
        edit,
        delete: deletePost,
    };
};
