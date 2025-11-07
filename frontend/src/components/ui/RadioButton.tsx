import React from 'react';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    value,
    checked,
    onChange,
    id,
    className = '',
    ...props
}) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <label
            htmlFor={radioId}
            className={`flex items-center gap-3 border rounded p-4 cursor-pointer transition-colors font-pixel ${
                checked
                    ? 'border-emerald-green bg-emerald-gray shadow-emerald'
                    : 'border-white bg-emerald-gray hover:bg-emerald-dark shadow-emerald'
            } ${className}`}
        >
            <input
                type="radio"
                id={radioId}
                value={value}
                checked={checked}
                onChange={onChange}
                className="w-5 h-5 text-emerald-green focus:ring-emerald-green focus:ring-2"
                {...props}
            />
            <span className="text-white">{label}</span>
        </label>
    );
};

export default RadioButton;

