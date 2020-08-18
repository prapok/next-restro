import fetch from 'isomorphic-unfetch';

export const contact = message => {
    const {API_URL} = process.env;
    return fetch(`${API_URL}/contact-us-forms`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};