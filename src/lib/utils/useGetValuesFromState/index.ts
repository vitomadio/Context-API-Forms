import { useContext } from 'react';
import { formStore } from '../../store';

const useGetValuesFromState: Function = (name: string): object | null => {
    const { formState } = useContext<any>(formStore);
    if (formState && name) {
        return formState[name];
    }
    return null;
};

export default useGetValuesFromState;
