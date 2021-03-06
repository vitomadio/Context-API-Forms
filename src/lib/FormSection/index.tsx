import React from 'react';

export interface IFieldArrayProps {
    formName?: string;
    fieldArrayName: string;
    children: React.ReactElement<any>[];
}

const FormSection = ({
    formName,
    fieldArrayName,
    children,
}: IFieldArrayProps): JSX.Element => {
    const childrenWithProps: React.ReactElement<any>[] = React.Children.map(
        children,
        (child) => {
            return React.cloneElement(child, {
                fieldArrayName,
                formName,
                key: child.props.fieldName,
            });
        }
    );

    return <div>{childrenWithProps}</div>;
};

export default FormSection;
