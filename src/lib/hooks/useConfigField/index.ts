import { useContext } from 'react';
import { formStore } from '../../store';

const useConfigField: Function = (
    formName: string | undefined,
    fieldName: string,
    formSectionName: string | undefined
): object | null => {
    const { formState }: any = useContext(formStore);
    if (formState && formName && formState[formName]) {
        if (formSectionName && formState[formName][formSectionName]) {
            return formState[formName][formSectionName][fieldName];
        }
        return formState[formName][fieldName];
    }
    return null;
};

export default useConfigField;
