import { useEffect, useState } from "react";

const useValidate = (ref, validations) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (validations) {
      const current = ref.current;
      const validateInput = (e) => {
        validations.map((validation) => {
          if (e.target.checked) {
            return setError(validation(e.target.checked));
          }
          return setError(validation(e.target.value));
        });
      };
      ref.current.addEventListener("focusout", validateInput);
      return () => {
        current.removeEventListener("focusout", validateInput);
      };
    }
  }, [ref, validations]);
  return error;
};

export default useValidate;
