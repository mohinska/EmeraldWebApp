import React from 'react';

export interface ProgressBarProps {
    current: number;
    total: number;
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    current,
    total,
    className = '',
}) => {
    const percentage = (current / total) * 100;
    const segments = Array.from({ length: total }, (_, i) => i < current);

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="flex gap-1">
                {segments.map((filled, index) => (
                    <div
                        key={index}
                        className={`h-4 w-4 rounded ${
                            filled ? 'bg-emerald-green' : 'bg-emerald-gray border border-white'
                        }`}
                    />
                ))}
            </div>
            <span className="text-white font-pixel text-sm">
                {current}/{total}
            </span>
        </div>
    );
};

export default ProgressBar;

