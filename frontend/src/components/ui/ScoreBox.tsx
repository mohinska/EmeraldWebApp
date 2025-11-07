import React from 'react';

export interface ScoreBoxProps {
    label: string;
    score: number;
    total: number;
    variant: 'correct' | 'wrong';
}

const ScoreBox: React.FC<ScoreBoxProps> = ({ label, score, total, variant }) => {
    const borderColor = variant === 'correct' ? 'border-emerald-green' : 'border-red-500';
    const textColor = variant === 'correct' ? 'text-emerald-green' : 'text-red-500';

    return (
        <div className={`border-2 ${borderColor} rounded p-6 bg-emerald-gray shadow-emerald`}>
            <p className={`text-sm font-pixel mb-2 ${textColor}`}>{label}</p>
            <p className="text-white text-4xl font-bold font-pixel">
                {score}/{total}
            </p>
        </div>
    );
};

export default ScoreBox;

