let baseUrl = 'http://localhost:3030/jsonstore/space/';

export const getAll = async () => {
    const response = await fetch(baseUrl);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return Object.values(result.astronauts);
};

export const getAstronautDetails = async (astronautId) => {
    const response = await fetch(baseUrl + `details/${astronautId}`);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};
