
export const ContentType = {
    JSON: 'application/json;charset=UTF-8',
    FORM: 'application/x-www-form-urlencoded; charset=UTF-8',
};

export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};
export const checkStatus = (response) => {
    if (response.status === 200) {
        return response.json();
    }
    throw new Error();
};

export const handleFetch = promise => promise
    .then(response => checkStatus(response))
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
    });
