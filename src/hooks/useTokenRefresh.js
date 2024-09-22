import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { refreshToken } from '../api/authAPI';

const useTokenRefresh = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            console.log('User is not authenticated. Skipping token refresh setup.');
            return;
        }


        const tokenLifespanSeconds = 3600; 

        const refresh = async () => {
            console.log('Attempting to refresh access token...');

            try {
                const response = await refreshToken();

                if (response?.status === 200) {
                    console.log('Access token refreshed successfully.');
                    const nextRefreshTime = Date.now() + (tokenLifespanSeconds - 600) * 1000; 
                    console.log('Next refresh scheduled in:', (tokenLifespanSeconds - 600), 'seconds');
                    console.log('Access token will expire at:', new Date(Date.now() + tokenLifespanSeconds * 1000).toLocaleTimeString());

                  
                    setTimeout(refresh, nextRefreshTime - Date.now());
                } else {
                    console.warn('Failed to refresh token, received response:', response);
                }
            } catch (error) {
                console.error('Error refreshing access token:', error);
            }
        };

        const initialRefreshTime = (tokenLifespanSeconds - 600) * 1000; 
        console.log('Initial refresh scheduled in:', initialRefreshTime / 1000, 'seconds');

        const timeoutId = setTimeout(refresh, initialRefreshTime);

        return () => {
            console.log('Clearing token refresh timeout');
            clearTimeout(timeoutId);
        };
    }, [isAuthenticated]);
};

export default useTokenRefresh;
