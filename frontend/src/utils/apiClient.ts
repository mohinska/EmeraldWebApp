import axios from 'axios';

// Configure axios to send credentials (cookies) with every request
export const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
});

