import React from 'react';

export interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
    title,
    children,
    className = '',
    titleClassName = '',
}) => {
    return (
        <div className={className}>
            <h2 className={`text-white text-2xl font-heading mb-4 ${titleClassName}`.trim()}>
                {title}
            </h2>
            {children}
        </div>
    );
};

export default Section;

