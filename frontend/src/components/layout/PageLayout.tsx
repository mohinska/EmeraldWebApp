import React from 'react';
import Header from '../Header';

export interface PageLayoutProps {
    children: React.ReactNode;
    showHeader?: boolean;
    className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
    children,
    showHeader = true,
    className = '',
}) => {
    return (
        <div className={`min-h-screen bg-emerald-dark flex flex-col ${className}`}>
            {showHeader && <Header />}
            <main className="flex-1 flex items-center justify-center px-4 py-12">
                {children}
            </main>
        </div>
    );
};

export default PageLayout;

