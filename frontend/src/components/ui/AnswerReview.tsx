import React from 'react';

export interface AnswerReviewProps {
    label: string;
    answer: string;
    isCorrect?: boolean;
}

const AnswerReview: React.FC<AnswerReviewProps> = ({ label, answer, isCorrect = false }) => {
    const borderColor = isCorrect ? 'border-emerald-green' : 'border-white';

    return (
        <div className={`border ${borderColor} rounded p-4 bg-emerald-gray shadow-emerald`}>
            <div className="flex items-center gap-3">
                <input
                    type="radio"
                    checked={true}
                    readOnly
                    className="w-5 h-5 text-emerald-green"
                />
                <div>
                    <p className="text-white text-sm font-pixel mb-1">{label}</p>
                    <p className="text-white font-pixel">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default AnswerReview;

