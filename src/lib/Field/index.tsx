import React, { useRef } from 'react';
import useConfigField from '../hooks/useConfigField';
import useInputChange from '../hooks/useInputChange';
import useValidate from '../hooks/useValidate';

interface IComponentProps {
    type: string | undefined;
    label: string | undefined;
    placeholder: string | undefined;
    name: string;
    error: boolean | undefined;
    defaultValue: any | undefined;
}

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
    component(props: IComponentProps): React.ReactNode;
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

    return (
        <div key={key} ref={inputRef}>
            {component({
                type,
                label,
                placeholder,
                name,
                error,
                defaultValue,
            })}
        </div>
    );
};

export default Field;
