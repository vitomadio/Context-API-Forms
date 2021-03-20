import React, { useRef } from 'react';
import useConfigField from '../utils/useConfigField';
import useInputChange from '../utils/useInputChange';
import useValidate from '../utils/useValidate';

export interface IFieldProps {
    key?: string;
    type?: string;
    formName?: string;
    name: string;
    formSectionName?: string;
    fieldArrayName?: string;
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
    fieldArrayName,
    validations,
    label,
    placeholder,
    component,
}: IFieldProps): JSX.Element => {
    const inputRef = useRef<HTMLDivElement | null>(null);

    // Sets fields with initial values.
    const defaultValue = useConfigField(formName, name, formSectionName);

    // Handles input changes.
    useInputChange(
        inputRef,
        type,
        formName,
        name,
        formSectionName,
        fieldArrayName
    );

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
        <div key={key} ref={inputRef}>
            {childComponent}
        </div>
    );
};

export default Field;
