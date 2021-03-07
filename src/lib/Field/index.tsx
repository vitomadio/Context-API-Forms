import React, { useRef } from 'react';
import useConfigField from '../useConfigField';
import useInputChange from '../useInputChange';
import useValidate from '../useValidate';

export interface IFieldProps {
    key?: string;
    type?: string;
    formName?: string;
    name: string;
    formSectionName?: string;
    validations?: Array<Function>;
    label?: string;
    placeholder?: string;
    component: React.ReactElement<any>;
}

const Field: React.FC<IFieldProps> = ({
    key,
    type,
    formName,
    name,
    formSectionName,
    validations,
    label,
    placeholder,
    component,
}: IFieldProps): JSX.Element => {
    const inputRef = useRef<any>(null);

    // Sets fields with initial values.
    const defaultValue = useConfigField(formName, name, formSectionName);

    // Handles input changes.
    useInputChange(inputRef, type, formName, name, formSectionName);

    // Checks validations.
    const error: boolean = useValidate(inputRef, validations);

    const childComponent: React.ReactElement<any> = React.cloneElement(
        component,
        {
            type,
            label,
            placeholder,
            fieldName: name,
            error,
            defaultValue,
        }
    );

    return (
        <>
            <div key={key} ref={inputRef}>
                {childComponent}
            </div>
        </>
    );
};

export default Field;
