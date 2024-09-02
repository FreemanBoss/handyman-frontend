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
