import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Configure axios to send credentials (cookies) with every request
const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true, // This is essential!
});

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This effect runs when the component mounts (after redirect)
        apiClient.get('/api/users/me')
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching user:", error);
                setLoading(false);
                // You would redirect back to login here
            });
    }, []); // Empty dependency array means it runs once

    if (loading) {
        return <div>Loading user data...</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <pre>{JSON.stringify(user, null, 2)}</pre>
            ) : (
                <p>Could not load user data.</p>
            )}
        </div>
    );
};

export default Dashboard;