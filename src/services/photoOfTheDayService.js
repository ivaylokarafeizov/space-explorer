let baseUrl =
    'https://api.nasa.gov/planetary/apod?api_key=AwTRv6eVGouENVWSVdXTpvCD2RfcDi5nfyensbZw';

export const getPhoto = async () => {
    const response = await fetch(baseUrl);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};
