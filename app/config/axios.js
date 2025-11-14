import axios from "axios";

// Use environment variable or fall back to localhost
const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authentication token to all requests
    const authToken = localStorage.getItem('authToken') || localStorage.getItem('token');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    console.log('🚀 API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      fullURL: `${config.baseURL}${config.url}`,
      headers: config.headers,
      data: config.data
    });

    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        console.log('✅ API Response:', {
            status: response.status,
            statusText: response.statusText,
            data: response.data
        });
        return response;
    },
    (error) => {
        // Better error logging that captures all error details
        const errorDetails = {
            message: error.message,
            code: error.code,
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            config: {
                method: error.config?.method,
                url: error.config?.url,
                baseURL: error.config?.baseURL
            }
        };

        console.error('❌ API Error:', errorDetails);
        console.error('Full error object:', error);

        // Handle specific error cases
        if (error.code === 'ECONNABORTED') {
            console.error('⏱️ Request timeout');
        } else if (error.code === 'ERR_NETWORK') {
            console.error('🌐 Network error - Cannot reach server');
        } else if (!error.response) {
            console.error('📡 No response received from server');
        }

        return Promise.reject(error);
    }
);

export default api;