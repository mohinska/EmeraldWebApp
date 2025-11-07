import React from 'react';
import Textarea, { TextareaProps } from './Textarea';

export interface TextareaFieldProps extends Omit<TextareaProps, 'label'> {
    label: string;
    name: string;
    required?: boolean;
    containerClassName?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
    label,
    name,
    required = false,
    error,
    containerClassName = '',
    className = '',
    ...textareaProps
}) => {
    const defaultMargin = containerClassName.includes('mb-') ? '' : 'mb-4';
    const containerClasses = `${defaultMargin} ${containerClassName}`.trim();

    return (
        <div className={containerClasses}>
            <Textarea
                name={name}
                label={
                    <span>
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                }
                error={error}
                required={required}
                className={className}
                {...textareaProps}
            />
        </div>
    );
};

export default TextareaField;

