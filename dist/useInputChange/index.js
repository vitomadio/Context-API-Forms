import { useContext, useEffect } from 'react';
import { formStore } from '../store';

const useInputChange = (ref, type, formName, fieldName, fieldArrayName) => {
  const {
    formState,
    dispatch
  } = useContext(formStore);
  useEffect(() => {
    const current = ref.current;

    const inputChange = event => {
      let value = event.target.value || null;

      if (type === 'number') {
        if (!value || value === 0) {
          value = null;
        }

        value = parseInt(value);
      }

      if (type === 'checkbox') {
        value = event.target.checked;

        if (value !== true) {
          value = false;
        }
      }

      if (fieldArrayName) {
        if (formState[formName] && formState[formName][fieldArrayName] != null) {
          dispatch({
            type: 'change-form',
            payload: {
              [formName]: {
                [fieldArrayName]: { ...formState[formName][fieldArrayName],
                  [fieldName]: value
                }
              }
            }
          });
        } else {
          dispatch({
            type: 'change-form',
            payload: {
              [formName]: {
                [fieldArrayName]: {
                  [fieldName]: value
                }
              }
            }
          });
        }
      } else {
        dispatch({
          type: 'change-form',
          payload: {
            [formName]: {
              [fieldName]: value
            }
          }
        });
      }
    };

    ref.current.addEventListener('change', inputChange);
    return () => {
      current.removeEventListener('change', inputChange);
    };
  }, [ref, dispatch, fieldArrayName, fieldName, formName, type, formState]);
};

export default useInputChange;