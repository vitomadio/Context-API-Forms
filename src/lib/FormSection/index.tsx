import React from 'react';
import { isValidReactComponent } from '../utils';

export interface IFormSectionProps {
    formName?: string;
    name: string;
    children: React.ReactElement<any>[];
}

const FormSection = ({
    formName,
    name,
    children,
}: IFormSectionProps): JSX.Element => {
    const childrenWithProps: React.ReactElement<any>[] = React.Children.map(
        children,
        (child) => {
            if (isValidReactComponent(child)) {
                return React.cloneElement(child, {
                    formSectionName: name,
                    formName,
                });
            }
            return React.cloneElement(child);
        }
    );

    return <>{childrenWithProps}</>;
};

export default FormSection;
