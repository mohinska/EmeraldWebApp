import React from 'react';

export interface SkillTagProps {
    skill: string;
    onRemove?: () => void;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, onRemove }) => {
    return (
        <div className="inline-flex items-center gap-2 bg-emerald-gray border border-white rounded px-3 py-1 font-pixel text-white shadow-emerald">
            <span>{skill}</span>
            {onRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    className="text-white hover:text-red-500 transition-colors"
                    aria-label={`Remove ${skill}`}
                >
                    ×
                </button>
            )}
        </div>
    );
};

export default SkillTag;

