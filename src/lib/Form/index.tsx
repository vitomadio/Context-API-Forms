import React from 'react';

export interface IFormProps {
    name: string;
    children: React.ReactElement<any>[];
}

const Form = ({ name, children }: IFormProps): JSX.Element => {
    const childrenWithProps: React.ReactElement<any>[] = React.Children.map(
        children,
        (child) => {
            return React.cloneElement(child, {
                formName: name,
                key: child.props.fieldName,
            });
        }
    );

    return <form>{name && childrenWithProps}</form>;
};

export default Form;
