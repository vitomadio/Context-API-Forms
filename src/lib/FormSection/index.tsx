import React from 'react';

export interface IFormSectionProps {
    formName?: string;
    name: string;
    label?: string;
    children: React.ReactElement<any>[];
}

const FormSection = ({
    formName,
    name,
    label,
    children,
}: IFormSectionProps): JSX.Element => {
    const childrenWithProps: React.ReactElement<any>[] = React.Children.map(
        children,
        (child) => {
            return React.cloneElement(child, {
                formSectionName: name,
                formName,
                key: child.props.fieldName,
            });
        }
    );

    return (
        <>
            <label htmlFor={name}>{label && `${label}: `}</label>
            <div id={name}>{childrenWithProps}</div>
        </>
    );
};

export default FormSection;
