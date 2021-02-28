/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { formStore } from '../store';

const useSetInitialValues = initialValues => {
  const {
    dispatch
  } = useContext(formStore);
  useEffect(() => {
    dispatch({
      type: 'set-initial-values',
      payload: initialValues
    });
  }, []);
};

export default useSetInitialValues;