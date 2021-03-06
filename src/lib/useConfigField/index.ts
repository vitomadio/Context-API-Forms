import { useContext } from 'react';
import { formStore } from '../store';

const useConfigField = (
    formName: string,
    fieldName: string,
    fieldArrayName: string | undefined
): object | null => {
    const { formState }: any = useContext(formStore);
    if (formState[formName]) {
        if (fieldArrayName && formState[formName][fieldArrayName]) {
            return formState[formName][fieldArrayName][fieldName];
        }
        return formState[formName][fieldName];
    }
    return null;
};

export default useConfigField;
