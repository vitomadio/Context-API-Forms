import { useContext } from 'react';
import { formStore } from '../../store';

const useConfigField = (
    formName: string | undefined,
    fieldName: string,
    formSectionName: string | undefined
): any | null => {
    const { formState }: any = useContext(formStore);
    if (formState && formName && formState[formName]) {
        if (formSectionName && formState[formName][formSectionName]) {
            return formState[formName][formSectionName][fieldName];
        }
        return formState[formName][fieldName];
    }
    if (fieldName?.includes('.') && fieldName?.split('.').length === 5) {
        const [index, , formName, fieldArrayName, name] = fieldName.split('.');
        return formState[formName][fieldArrayName][index][name];
    }
    return null;
};

export default useConfigField;
