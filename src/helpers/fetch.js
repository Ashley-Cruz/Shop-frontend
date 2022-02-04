const baseUrl = process.env.REACT_APP_FAKESTOREAPI

export const fetchResponse = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;

    if(method === 'GET'){
        return fetch(url);
    }else {
        return fetch(url, {
            method,
            body: JSON.stringify(data)
        })
    }
}