import { requestFactory } from './requester';

let baseUrl = 'http://localhost:3030/jsonstore/space/';
const request = requestFactory();

export const getAll = async () => {
    const result = await request.get(baseUrl + 'solarSystem');

    return Object.values(result);
};

export const getDetails = async (planetId) => {
    const result = await request.get(baseUrl + `details/${planetId}`);

    return result;
};
