import React from 'react';

export interface SeparatorProps {
    variant?: 'horizontal' | 'vertical';
    color?: 'green' | 'gray' | 'white';
    className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
    variant = 'horizontal',
    color = 'green',
    className = '',
}) => {
    const colorClasses = {
        green: 'bg-emerald-green',
        gray: 'bg-emerald-gray',
        white: 'bg-white',
    };

    const sizeClasses = {
        horizontal: 'w-full h-0.5',
        vertical: 'h-full w-0.5',
    };

    const combinedClassName = `${sizeClasses[variant]} ${colorClasses[color]} ${className}`.trim();

    return <div className={combinedClassName} aria-hidden="true" />;
};

export default Separator;

