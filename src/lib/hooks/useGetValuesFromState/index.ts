import { useContext } from 'react';
import { formStore } from '../../store';

const useGetValuesFromState = (name: string): any | null => {
    const { formState } = useContext<any>(formStore);
    if (formState && name) {
        return formState[name];
    }
    return null;
};

export default useGetValuesFromState;
