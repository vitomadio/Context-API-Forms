import React, { useMemo } from 'react';
import { isValidReactComponent } from '../utils';
import useGetValuesFromState from '../hooks/useGetValuesFromState';

export interface IFormProps {
    name: string;
    children: React.ReactElement<any>[];
    handleSubmit?: ((values: any) => void) | undefined;
}

const Form = ({ name, children, handleSubmit }: IFormProps): JSX.Element => {
    const values = useGetValuesFromState(name);

    const childrenWithProps: React.ReactElement<any>[] = useMemo(
        () =>
            React.Children.map(children, (child) => {
                if (isValidReactComponent(child)) {
                    return React.cloneElement(child, {
                        formName: name,
                        key: child.props.fieldName,
                    });
                } else {
                    return React.cloneElement(child, {});
                }
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [name]
    );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (handleSubmit) {
                    handleSubmit(values);
                }
            }}
        >
            {name && childrenWithProps}
        </form>
    );
};

export default Form;
