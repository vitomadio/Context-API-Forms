import React from 'react';

export interface IFormProps {
    formName: string;
    children: React.ReactElement<any>[];
}

const Form = ({ formName, children }: IFormProps): JSX.Element => {
    const childrenWithProps: React.ReactElement<any>[] = React.Children.map(
        children,
        (child) => {
            return React.cloneElement(child, {
                formName,
                key: child.props.fieldName,
            });
        }
    );

    return <form name={formName}>{childrenWithProps}</form>;
};

export default Form;
