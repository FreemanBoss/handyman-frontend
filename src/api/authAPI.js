import apiClient from './apiClient';


export const login = async (credentials) => {
    try {
        const response = await apiClient.post('/api/auth/login', credentials);
        return response.data.user; // Assuming your backend returns the user object
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const logout = async () => {
    try {
        await apiClient.post('/api/auth/logout');
    } catch (error) {
        throw new Error('Logout failed', error);
    }
};
