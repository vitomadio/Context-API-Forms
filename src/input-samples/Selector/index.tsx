import React from 'react';

interface ISelectorProps {
    name?: string;
    defaultValue?: any;
}

const Selector: React.FC<ISelectorProps> = ({
    name,
    defaultValue,
}: ISelectorProps) => (
    <select name={name} id="Sex">
        <option>{defaultValue || 'Select sex'}</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
    </select>
);

export default Selector;
