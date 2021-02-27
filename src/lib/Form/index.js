import React from 'react';

const Form = ({ formName, children }) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            formName,
            key: child.props.fieldName,
        });
    });

    return <form name={formName}>{childrenWithProps}</form>;
};

export default Form;
