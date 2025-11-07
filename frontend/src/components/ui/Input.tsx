import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
    error?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helperText, className = '', id, ...props }, ref) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const hasError = !!error;

        const baseStyles = 'w-full bg-emerald-gray border text-white px-4 py-2 rounded font-pixel placeholder-gray-400 focus:outline-none transition-colors shadow-emerald';
        const borderStyles = hasError
            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
            : 'border-white focus:ring-2 focus:ring-emerald-green';
        const combinedClassName = `${baseStyles} ${borderStyles} ${className}`.trim();

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-white mb-2 font-pixel"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={combinedClassName}
                    aria-invalid={hasError}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <p
                        id={`${inputId}-error`}
                        className="mt-1 text-sm text-red-500 font-pixel"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p
                        id={`${inputId}-helper`}
                        className="mt-1 text-sm text-gray-400 font-pixel"
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;

