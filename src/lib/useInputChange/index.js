import { useContext, useEffect } from "react";
import { formStore } from "../store";

const useInputChange = (ref, type, formName, fieldName, fieldArrayName) => {
  const { dispatch } = useContext(formStore);

  useEffect(() => {
    const inputChange = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        let value = event.target.value || null;
        if (type === "number") {
          if (!value || value === 0) {
            value = null;
          }
          value = parseInt(value);
        }
        if (type === "checkbox") {
          value = event.target.checked;
          if (value !== true) {
            value = false;
          } 
        }
        if (fieldArrayName) {
          return dispatch({
            type: "change-form",
            payload: {
              [formName]: { [fieldArrayName]: { [fieldName]: value } }
            }
          });
        }
        return dispatch({
          type: "change-form",
          payload: { [formName]: { [fieldName]: value } }
        });
      }
    };
    document.addEventListener("change", inputChange);
    return () => {
      document.removeEventListener("change", inputChange);
    };
  }, [ref, dispatch, fieldArrayName, fieldName, formName, type]);
};

export default useInputChange;
