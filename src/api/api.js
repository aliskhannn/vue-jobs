import axios from "axios";

const api = axios.create({
	baseURL: "https://2737e585bd1473c6.mokky.dev/",
	headers: {
		'Content-Type': 'application/json'
	}
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Ошибка ответа:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;