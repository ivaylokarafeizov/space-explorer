import { requestFactory } from './requester';

let baseUrl = 'http://localhost:3030/jsonstore/space/';
const request = requestFactory();

export const getAll = async () => {
    const result = await request.get(baseUrl + 'astronauts');

    return Object.values(result);
};

export const getDetails = async (astronautId) => {
    const result = await request.get(baseUrl + `details/${astronautId}`);

    return result;
};
