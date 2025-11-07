import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { SidebarAction } from '../components/navigation/Sidebar';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import { apiClient } from '../utils/apiClient';
import FormField from '../components/ui/FormField';
import SelectField, { SelectOption } from '../components/ui/SelectField';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';

const Settings = () => {
    const { user, loading, username } = useAuth();

    // Form state
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('ukrainian');


    const languageOptions: SelectOption[] = [
        { value: 'ukrainian', label: 'державна' },
        { value: 'english', label: 'English' },
        { value: 'russian', label: 'Русский' },
    ];

    const handleSave = () => {
        // TODO: Implement save logic
        console.log('Saving settings:', {
            name,
            surname,
            email,
            password: password ? '***' : 'not changed',
            language,
        });
        // await apiClient.put('/api/users/me', { ... });
    };

    const handleCancel = () => {
        // Reset form to original values
        if (user) {
            setName(user.first_name || '');
            setSurname(user.last_name || '');
            setEmail(user.email || '');
            setPassword('');
        }
    };

    const sidebarActions: SidebarAction[] = [
        {
            label: 'Save',
            onClick: handleSave,
            variant: 'primary',
        },
        {
            label: 'Cancel',
            onClick: handleCancel,
            variant: 'gray',
        },
    ];

    useEffect(() => {
        if (user) {
            setName(user.first_name || '');
            setSurname(user.last_name || '');
            setEmail(user.email || '');
        }
    }, [user]);

    if (loading) {
        return (
            <DashboardLayout
                username={username}
                sidebarItems={DEFAULT_SIDEBAR_ITEMS}
                sidebarActions={sidebarActions}
            >
                <div className="text-white font-pixel">Loading settings...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout
            username={username}
            sidebarItems={DEFAULT_SIDEBAR_ITEMS}
            sidebarActions={sidebarActions}
        >
            <div className="max-w-4xl">
                <PageHeader title="Settings" className="mb-8" />

                <div className="space-y-8">
                    {/* Account Section */}
                    <Section title="Account">
                        <div className="space-y-4">
                            <FormField
                                name="name"
                                label="Name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Test"
                                autoComplete="given-name"
                            />

                            <FormField
                                name="surname"
                                label="Surname"
                                type="text"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                placeholder="Test"
                                autoComplete="family-name"
                            />

                            <FormField
                                name="email"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@gmail.com"
                                autoComplete="email"
                            />

                            <FormField
                                name="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="************"
                                autoComplete="new-password"
                                containerClassName="mb-0"
                            />
                        </div>
                    </div>

                    {/* General Section */}
                    <Section title="General">
                        <div className="space-y-4">
                            <SelectField
                                name="language"
                                label="Language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                options={languageOptions}
                                containerClassName="mb-0"
                            />
                        </div>
                    </Section>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;

