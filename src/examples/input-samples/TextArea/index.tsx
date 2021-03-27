import React from 'react';

interface ITextAreaProps {
    name?: string;
    label?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({
    name,
    label,
}: ITextAreaProps): JSX.Element => (
    <label htmlFor={name}>
        {label && `${label}: `}
        <textarea id={name}></textarea>
    </label>
);

export default TextArea;
