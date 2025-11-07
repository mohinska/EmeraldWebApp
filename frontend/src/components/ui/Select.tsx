import React from 'react';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: React.ReactNode;
    error?: string;
    helperText?: string;
    options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, error, helperText, className = '', id, options, ...props }, ref) => {
        const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
        const hasError = !!error;

        const baseStyles = 'w-full bg-emerald-gray border text-white px-4 py-2 rounded font-pixel focus:outline-none transition-colors appearance-none cursor-pointer shadow-emerald';
        const borderStyles = hasError
            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
            : 'border-white focus:ring-2 focus:ring-emerald-green';
        const combinedClassName = `${baseStyles} ${borderStyles} ${className}`.trim();

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={selectId}
                        className="block text-white mb-2 font-pixel"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        id={selectId}
                        className={combinedClassName}
                        aria-invalid={hasError}
                        aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
                        {...props}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value} className="bg-emerald-gray">
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
                {error && (
                    <p
                        id={`${selectId}-error`}
                        className="mt-1 text-sm text-red-500 font-pixel"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p
                        id={`${selectId}-helper`}
                        className="mt-1 text-sm text-gray-400 font-pixel"
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;

