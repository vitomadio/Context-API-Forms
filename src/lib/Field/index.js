import React, { useRef } from 'react';
import useConfigField from '../useConfigField';
import useInputChange from '../useInputChange';
import useValidate from '../useValidate';

const Field = ({
    key,
    type,
    formName,
    fieldName,
    fieldArrayName,
    validations,
    label,
    placeholder,
    children,
}) => {
    const inputRef = useRef(null);
    const defaultValue = useConfigField(formName, fieldName, fieldArrayName);
    useInputChange(inputRef, type, formName, fieldName, fieldArrayName);
    const error = useValidate(inputRef, validations);
    const childrenWithProps = React.cloneElement(children, {
        type,
        label,
        placeholder,
        name: fieldName,
        error,
        defaultValue,
    });
    return (
        <>
            <div key={key} ref={inputRef}>
                {childrenWithProps}
            </div>
        </>
    );
};

export default Field;
