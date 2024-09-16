// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com', // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers if needed
  },
});

// Optionally, add interceptors for request and response
api.interceptors.request.use(
  config => {
    // You can add authorization headers or modify request config here
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default api;
