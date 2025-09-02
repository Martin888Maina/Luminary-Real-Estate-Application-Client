import axios from 'axios';

// Set up global axios interceptor for automatic logout on 401 responses
const setupAxiosInterceptor = () => {
    axios.interceptors.response.use(
        (response) => {
            // Return successful responses as-is
            return response;
        },
        (error) => {
            // Handle 401 (Unauthorized) responses globally
            if (error.response && error.response.status === 401) {
                console.log('Token expired or invalid, logging out...');
                
                // Clear all storage
                sessionStorage.clear();
                localStorage.clear();
                
                // Redirect to login page
                window.location.href = '/login';
            }
            
            // Re-throw the error for components to handle if needed
            return Promise.reject(error);
        }
    );
};

export default setupAxiosInterceptor;