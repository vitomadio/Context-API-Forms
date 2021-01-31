import React, { useRef } from "react";
import useInputChange from "../useInputChange";
import useValidate from "../useValidate";

const Field = ({
  type,
  formName,
  fieldName,
  fieldArrayName,
  validations,
  label,
  children,
  key
}) => {
  const inputRef = useRef(null);
  useInputChange(inputRef, type, formName, fieldName, fieldArrayName);
  const error = useValidate(inputRef, validations);
  const childrenWithProps = React.cloneElement(children, {
    type,
    label,
    name: fieldName,
    error
  });
  return (
    <>
      <div key={key} ref={inputRef}>
        {childrenWithProps}
      </div>
    </>
  );
};

export default Field;
