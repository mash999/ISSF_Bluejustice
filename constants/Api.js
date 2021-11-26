export const apiUrl = 'http://192.168.56.1:8000/bluejustice/'


export const fetchAllUrl = () => {
    return apiUrl + 'fetch-all-records/';
}


export const fetchRecordsByLimit = (limit) => {
    return apiUrl + 'fetch-records-with-limit/' + limit;
}


export const fetchByIdUrl = (id) => {
    return apiUrl + 'fetch-record/' + id;
}


export const registerRecordUrl = () => {
    return apiUrl + 'register-new-alert/';
}