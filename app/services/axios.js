import axios from "axios";

const baseURL = "https://apispa.tokisakinino.xyz";

const api = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: (params) =>
    new URLSearchParams(params).toString(),
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response.data, // Trả thẳng data
  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        localStorage.removeItem("token");
        // localStorage.removeItem("email");

        // Nếu dùng React Router:
        // window.location.href = "/login";

        break;

      case 403:
        console.error("Forbidden");
        break;

      case 500:
        console.error("Server Error");
        break;

      default:
        break;
    }

    // Lỗi mạng hoặc timeout
    if (!error.response) {
      console.error("Network Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;