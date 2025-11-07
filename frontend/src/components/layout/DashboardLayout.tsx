import React from 'react';
import Header from '../Header';
import Sidebar, { SidebarItem, SidebarAction, SidebarCV } from '../navigation/Sidebar';

export interface DashboardLayoutProps {
    children: React.ReactNode;
    username?: string;
    sidebarItems?: SidebarItem[];
    sidebarActions?: SidebarAction[];
    sidebarCVs?: SidebarCV[];
    onCVSelect?: (cvId: string) => void;
    onNewCV?: () => void;
    onAIGenerator?: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    username,
    sidebarItems = [],
    sidebarActions = [],
    sidebarCVs = [],
    onCVSelect,
    onNewCV,
    onAIGenerator,
}) => {
    return (
        <div className="min-h-screen bg-emerald-dark flex flex-col">
            <Header username={username} />
            <div className="flex flex-1">
                {(sidebarItems.length > 0 || sidebarActions.length > 0 || sidebarCVs.length > 0 || onNewCV || onAIGenerator) && (
                    <Sidebar
                        items={sidebarItems}
                        actions={sidebarActions}
                        cvs={sidebarCVs}
                        onCVSelect={onCVSelect}
                        onNewCV={onNewCV}
                        onAIGenerator={onAIGenerator}
                    />
                )}
                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

