import apiClient from './apiClient';



export const register = async (credentials) => {
    try {
        const response = await apiClient.post('auth/register', credentials);
        console.log(response)
        return response.data.user;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};


export const login = async (credentials) => {
    try {
        const response = await apiClient.post('/auth/login', credentials);
        console.log(response)
        return response.data.user; 
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const logout = async () => {
    try {
        await apiClient.post('/auth/logout');
    } catch (error) {
        console.log(error)
        // throw new Error('Logout failed', error);
    }
};

export const refreshToken = async () => {
    try {
        const response = await apiClient.post('/auth/refresh');
        console.log('Refresh token response:', response); // Log the response for debugging
        return response; // Return the response so it can be used in your hook
    } catch (error) {
        console.log('Error refreshing token:', error);
        return null; // Return null if there's an error
    }
};
