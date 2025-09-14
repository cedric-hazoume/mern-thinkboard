import axios from "axios";

const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5000/api' : '/api'
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;