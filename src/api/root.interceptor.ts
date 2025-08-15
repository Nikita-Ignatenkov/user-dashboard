import axios from 'axios';

// Базовый URL API (DummyJSON)
export const API_URL = 'https://dummyjson.com';

// Создаём экземпляр axios
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем интерцепторы (можно пока только для логирования)
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Запрос отправлен:', config.url);
    return config;
  },
  (error) => {
    console.error('Ошибка запроса:', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Ответ получен:', response.config.url);
    return response;
  },
  (error) => {
    console.error('Ошибка ответа:', error);
    return Promise.reject(error);
  },
);