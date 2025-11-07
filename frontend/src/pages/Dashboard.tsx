import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/ui/Button';
import PageHeader from '../components/ui/PageHeader';

const Dashboard = () => {
    const { loading, username } = useAuth();
    const navigate = useNavigate();

    const handleUpdateCV = () => {
        // TODO: Implement CV update logic
        console.log('Update CV clicked');
    };

    const handleSettings = () => {
        navigate('/settings');
    };

    if (loading) {
        return (
            <DashboardLayout username={username} sidebarItems={DEFAULT_SIDEBAR_ITEMS}>
                <div className="text-white font-pixel">Loading user data...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout username={username} sidebarItems={DEFAULT_SIDEBAR_ITEMS}>
            <div className="max-w-4xl">
                <PageHeader title="Dashboard" />

                <div className="flex gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleUpdateCV}
                        className="flex-1"
                    >
                        Update CV
                    </Button>
                    <Button
                        variant="gray"
                        size="lg"
                        onClick={handleSettings}
                        className="flex-1"
                    >
                        Settings
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;