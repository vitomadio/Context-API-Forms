import { useContext, useEffect } from 'react';
import {
    setFormAction,
    setFormSectionAction,
    setFieldArrayAction,
} from './actions';
import { setValue } from './utils';
import { formStore } from '../../store';

const useInputChange = (
    ref: { current: HTMLElement | null },
    type: string | undefined,
    formName: string | undefined,
    fieldName: string,
    formSectionName: string | undefined,
    fieldArrayName: string | undefined
): void => {
    const { formState, dispatch } = useContext(formStore);
    useEffect(() => {
        const current = ref.current;
        const inputChange = (event: Event): any => {
            const target = event.target as HTMLInputElement;
            // Config value
            let value: any = target.value || null;
            value = setValue(target, value, type);
            // Dispatch actions for Fields and FormSections
            if (formName) {
                if (formSectionName) {
                    setFormSectionAction(
                        formState,
                        formName,
                        formSectionName,
                        fieldName,
                        value,
                        dispatch
                    );
                } else {
                    setFormAction(formName, fieldName, value, dispatch);
                }
            }
            // Dispatch actions for FieldArrays
            if (formState && fieldName.includes('.')) {
                setFieldArrayAction(formState, fieldName, value, dispatch);
            }
        };
        if (ref.current) ref.current.addEventListener('change', inputChange);
        return () => {
            if (current) current.removeEventListener('change', inputChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        formState,
        formName,
        formSectionName,
        fieldName,
        fieldArrayName,
        type,
    ]);
};

export default useInputChange;
