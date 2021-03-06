import React, { useRef } from 'react';
import useConfigField from '../useConfigField';
import useInputChange from '../useInputChange';
import useValidate from '../useValidate';

export interface IFieldProps {
    key?: string;
    type?: string;
    formName?: string;
    fieldName: string;
    fieldArrayName?: string;
    validations?: Array<Function>;
    label?: string;
    placeholder?: string;
    children: React.ReactElement<any>;
}

const Field = ({
    key,
    type,
    formName = '',
    fieldName,
    fieldArrayName,
    validations,
    label,
    placeholder,
    children,
}: IFieldProps): React.ReactElement<any> => {
    const inputRef = useRef<any>(null);
    const defaultValue = useConfigField(formName, fieldName, fieldArrayName);
    useInputChange(inputRef, type, formName, fieldName, fieldArrayName);
    const error: boolean = useValidate(inputRef, validations);
    const childrenWithProps: React.ReactElement<any> = React.cloneElement(
        children,
        {
            type,
            label,
            placeholder,
            name: fieldName,
            error,
            defaultValue,
        }
    );
    return (
        <>
            <div key={key} ref={inputRef}>
                {childrenWithProps}
            </div>
        </>
    );
};

export default Field;
