import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/users';

export const usersAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});
