import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'md',
}) => {
    const paddingStyles = {
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-12',
    };

    const baseStyles = 'w-full max-w-md bg-emerald-gray rounded-lg shadow-emerald';
    const combinedClassName = `${baseStyles} ${paddingStyles[padding]} ${className}`.trim();

    return <div className={combinedClassName}>{children}</div>;
};

export default Card;

