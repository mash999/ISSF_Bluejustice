import { fetchAllUrl, fetchByIdUrl } from '../constants/Api'


export const FetchAllRecords = () => {
    const apiUrl = fetchAllUrl();
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Response: ", response);
    })
    .catch(error => console.log("Error: ", error))
}


export const FetchById = id => {
    const apiUrl = fetchByIdUrl(id);
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Response: ", response);
    })
    .catch(error => console.log("Error: ", error))
}