import React from 'react';

export interface PresentButtonProps {
    isPresent: boolean;
    onChange: (isPresent: boolean) => void;
}

const PresentButton: React.FC<PresentButtonProps> = ({ isPresent, onChange }) => {
    return (
        <button
            type="button"
            onClick={() => onChange(!isPresent)}
            className={`px-4 py-2 rounded border font-pixel transition-colors shadow-emerald ${
                isPresent
                    ? 'bg-emerald-green text-white border-emerald-green'
                    : 'bg-transparent text-white border-white hover:bg-emerald-dark'
            }`}
        >
            Present
        </button>
    );
};

export default PresentButton;

