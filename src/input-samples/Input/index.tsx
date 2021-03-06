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
}: IInputProps): React.ReactElement<any> => {
    return (
        <>
            <label htmlFor={name}>
                {label && `${label}: `}
                <input
                    type={type}
                    id={name}
                    checked={defaultValue}
                    defaultValue={defaultValue}
                />
                {error && <p>Required</p>}
            </label>
        </>
    );
};

export default Input;
