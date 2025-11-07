import React from 'react';
import Input, { InputProps } from './Input';

export interface FormFieldProps extends Omit<InputProps, 'label'> {
    label: string;
    name: string;
    required?: boolean;
    containerClassName?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    required = false,
    error,
    containerClassName = '',
    className = '',
    ...inputProps
}) => {
    const defaultMargin = containerClassName.includes('mb-') ? '' : 'mb-4';
    const containerClasses = `${defaultMargin} ${containerClassName}`.trim();

    return (
        <div className={containerClasses}>
            <Input
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
                {...inputProps}
            />
        </div>
    );
};

export default FormField;

