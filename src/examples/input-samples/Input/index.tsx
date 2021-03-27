import React from 'react';

interface IInputProps {
    type?: string;
    error?: boolean;
    name?: string;
    label?: string;
    defaultValue?: any;
    placeholder?: string;
}

const Input: React.FC<IInputProps> = ({
    type,
    error,
    name,
    label,
    defaultValue,
    ...rest
}: IInputProps): JSX.Element => {
    return (
        <label htmlFor={name}>
            {label && `${label}: `}
            <input
                defaultChecked={defaultValue}
                type={type}
                id={name}
                defaultValue={defaultValue}
                {...rest}
                onClick={(e) => console.log(e.currentTarget.checked)}
            />
            {error && <p>Required</p>}
        </label>
    );
};

export default Input;
