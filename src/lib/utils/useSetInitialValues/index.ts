/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { formStore } from '../../store';

const useSetInitialValues: Function = (initialValues: any): void => {
    const { dispatch } = useContext(formStore);
    useEffect(() => {
        dispatch({
            type: 'change-form',
            payload: initialValues,
        });
    }, []);
};

export default useSetInitialValues;
