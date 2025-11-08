import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../utils/apiClient';

interface User {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    [key: string]: any;
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        apiClient.get('/api/users/me')
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching user:", error);
                setLoading(false);
                navigate('/login');
            });
    }, [navigate]);

    const username = user?.first_name || user?.email || 'User';

    return { user, loading, username, logout };
};
