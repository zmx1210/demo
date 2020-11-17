import 'whatwg-fetch';
import {
    HttpMethod, ContentType, handleFetch,
} from './base';

const getHeaders = () => ({ 'Content-Type': ContentType.JSON });
const fetchAPI = {
    get: (url, body = null) => {
        if (body !== null) {
            const url2 = new URL(url);
            Object.keys(body).forEach(key => url2.searchParams.append(key, body[key]));
        }

        const promise = fetch(url, {
            method: HttpMethod.GET,
            headers: getHeaders(),
        });
        return handleFetch(promise);
    },

    post: (url, body) => {
        const promise = fetch(url, {
            method: HttpMethod.POST,
            headers: getHeaders(),
            body: JSON.stringify(body),
        });
        return handleFetch(promise);
    },

};

export default fetchAPI;
