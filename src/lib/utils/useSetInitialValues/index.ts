/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { formStore } from 'lib/store';

const useSetInitialValues = (initialValues: any): void => {
    const { dispatch } = useContext(formStore);
    useEffect(() => {
        dispatch({
            type: 'set-initial-values',
            payload: initialValues,
        });
    }, []);
};

export default useSetInitialValues;
