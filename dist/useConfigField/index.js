import { useContext } from 'react';
import { formStore } from '../store';

const useConfigField = (formName, fieldName, fieldArrayName) => {
  const {
    formState
  } = useContext(formStore);

  if (formState[formName]) {
    if (fieldArrayName && formState[formName][fieldArrayName]) {
      return formState[formName][fieldArrayName][fieldName];
    }

    return formState[formName][fieldName];
  }

  return null;
};

export default useConfigField;