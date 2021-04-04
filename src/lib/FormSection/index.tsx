import React from 'react';
import { isValidReactComponent } from '../utils';

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
            if (isValidReactComponent(child)) {
                return React.cloneElement(child, {
                    formSectionName: name,
                    formName,
                    key: child.props.fieldName,
                });
            } else {
                return React.cloneElement(child, {});
            }
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
