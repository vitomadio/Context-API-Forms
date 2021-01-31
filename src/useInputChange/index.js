import { useContext, useEffect } from "react";
import { store } from "../store";

const useInputChange = (ref, type, formName, fieldName, fieldArrayName) => {
  const { dispatch } = useContext(store);

  useEffect(() => {
    const inputChange = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        let value = event.target.value;
        if (type === "number") {
          value = parseInt(event.target.value) || "";
        }
        if (type === "checkbox") {
          if (event.target.checked !== true) {
            value = false;
          } else {
            value = event.target.checked;
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
  }, [ref]);
};

export default useInputChange;
