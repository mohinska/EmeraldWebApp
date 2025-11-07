import React from 'react';
import Select, { SelectProps, SelectOption } from './Select';

export interface SelectFieldProps extends Omit<SelectProps, 'label'> {
    label: string;
    name: string;
    required?: boolean;
    containerClassName?: string;
    options: SelectOption[];
}

// Re-export SelectOption for convenience
export type { SelectOption };

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    name,
    required = false,
    error,
    containerClassName = '',
    className = '',
    options,
    ...selectProps
}) => {
    const defaultMargin = containerClassName.includes('mb-') ? '' : 'mb-4';
    const containerClasses = `${defaultMargin} ${containerClassName}`.trim();

    return (
        <div className={containerClasses}>
            <Select
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
                options={options}
                {...selectProps}
            />
        </div>
    );
};

export default SelectField;

