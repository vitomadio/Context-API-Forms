import React from 'react';
import { isValidReactComponent } from '../utils';
import useGetValuesFromState from '../hooks/useGetValuesFromState';

export interface IFormProps {
    name: string;
    children: React.ReactElement<any>[];
    handleSubmit?: (values: any) => void | undefined;
}

const Form = ({
    name,
    children,
    handleSubmit = () => {},
}: IFormProps): JSX.Element => {
    const values = useGetValuesFromState(name);

    function recursiveCloneChildren(children: React.ReactElement[]) {
        return React.Children.map(children, (child: React.ReactElement) => {
            const childProps = {};
            if (!React.isValidElement(child)) {
                return child;
            }
            if (child.props) {
                // @ts-ignore
                childProps.children = recursiveCloneChildren(
                    // @ts-ignore
                    child.props.children
                );
                if (isValidReactComponent(child)) {
                    return React.cloneElement(child, {
                        ...childProps,
                        // @ts-ignore
                        formName: name,
                        // @ts-ignore
                        key: child.props.name,
                    });
                }
                // @ts-ignore
                return React.cloneElement(child, childProps);
            }
            return child;
        });
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(values);
            }}
        >
            {name && recursiveCloneChildren(children)}
        </form>
    );
};

export default Form;
