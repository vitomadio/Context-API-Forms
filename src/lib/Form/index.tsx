import React from 'react';
import useGetValuesFromState from 'lib/utils/useGetValuesFromState';

export interface IFormProps {
    name: string;
    children: React.ReactElement<any>[];
    handleSubmit: Function;
}

const Form = ({ name, children, handleSubmit }: IFormProps): JSX.Element => {
    const values = useGetValuesFromState(name);
    const childrenWithProps: React.ReactElement<any>[] = React.Children.map(
        children,
        (child) => {
            return React.cloneElement(child, {
                formName: name,
                key: child.props.fieldName,
            });
        }
    );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(values);
            }}
        >
            {name && childrenWithProps}
        </form>
    );
};

export default Form;
