import React from 'react';
import Separator from './Separator';

export interface PageHeaderProps {
    title: string;
    subtitle?: string;
    separatorColor?: 'white' | 'green' | 'gray';
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    separatorColor = 'white',
    className = '',
}) => {
    return (
        <div className={className}>
            <h1 className="text-white text-4xl font-heading mb-4">{title}</h1>
            {subtitle && (
                <h2 className="text-white text-2xl font-heading mb-4">{subtitle}</h2>
            )}
            <Separator color={separatorColor} className="mb-6" />
        </div>
    );
};

export default PageHeader;

