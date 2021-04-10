import { useContext, useMemo } from 'react';
import { formStore } from '../../store';

<<<<<<< Updated upstream
const useGetFieldsArray = (name: string, formName: string): Array<any> => {
=======
const useGetFieldsArray: Function = (
    name: string,
    formName: string
): Array<object> => {
>>>>>>> Stashed changes
    const { formState, dispatch } = useContext<any>(formStore);
    const fields = useMemo(() => {
        if (formState && formName && name) {
            if (formState[formName] && formState[formName][name]) {
                return formState[formName][name];
            } else {
                dispatch({
                    type: 'change-form',
                    payload: { [formName]: { [name]: [{}] } },
                });
                return [];
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState.formName?.name, name]);
    return fields;
};

export default useGetFieldsArray;
