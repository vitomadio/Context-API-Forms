import React from 'react';

interface ISelectorProps {
    name?: string;
    label?: string;
    defaultValue?: any;
}

const Selector: React.FC<ISelectorProps> = ({
    name,
    label,
    defaultValue,
}: ISelectorProps): JSX.Element => (
    <>
        <label htmlFor={label}>{label && `${label}: `}</label>
        <select name={name} id="Sex">
            <option>{defaultValue || 'Select sex'}</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
    </>
);

export default Selector;
