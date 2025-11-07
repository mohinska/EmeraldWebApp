import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: React.ReactNode;
    error?: string;
    helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, helperText, className = '', id, ...props }, ref) => {
        const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
        const hasError = !!error;

        const baseStyles = 'w-full bg-emerald-gray border text-white px-4 py-2 rounded font-pixel placeholder-gray-400 focus:outline-none transition-colors resize-y shadow-emerald';
        const borderStyles = hasError
            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
            : 'border-white focus:ring-2 focus:ring-emerald-green';
        const combinedClassName = `${baseStyles} ${borderStyles} ${className}`.trim();

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="block text-white mb-2 font-pixel"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={textareaId}
                    className={combinedClassName}
                    aria-invalid={hasError}
                    aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <p
                        id={`${textareaId}-error`}
                        className="mt-1 text-sm text-red-500 font-pixel"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p
                        id={`${textareaId}-helper`}
                        className="mt-1 text-sm text-gray-400 font-pixel"
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;

