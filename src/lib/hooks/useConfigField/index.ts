import { useContext } from 'react';
import { formStore } from '../../store';

const useConfigField = (
    formName: string | undefined,
    fieldName: string,
    formSectionName: string | undefined
): string | number | boolean | null => {
    const { formState }: any | null = useContext(formStore);
    if (formState && formName && formState[formName]) {
        if (formSectionName && formState[formName][formSectionName]) {
            return formState[formName][formSectionName][fieldName];
        }
        return formState[formName][fieldName];
    }
    if (fieldName?.includes('.') && fieldName?.split('.').length >= 4) {
        const [index, , formName, fieldArrayName, name] = fieldName.split('.');
        const item = formState[formName][fieldArrayName][index];
        if (name) {
            return item[name];
        }
        if (Object.prototype.toString.call(item) !== '[object Object]') {
            return item;
        }
    }
    return null;
};

export default useConfigField;
