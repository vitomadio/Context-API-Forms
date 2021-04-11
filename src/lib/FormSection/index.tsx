import React from 'react';
import { isValidReactComponent } from 'lib/Form/helperFunctions';

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
                    key: child.props.fieldName,
                });
            }
            return React.cloneElement(child);
        }
    );

    return <div id={name}>{childrenWithProps}</div>;
};

export default FormSection;
