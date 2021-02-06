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
  placeholder,
  children,
  key
}) => {
  const inputRef = useRef(null);
  useInputChange(inputRef, type, formName, fieldName, fieldArrayName);
  const error = useValidate(inputRef, validations);
  const childrenWithProps = /*#__PURE__*/React.cloneElement(children, {
    type,
    label,
    placeholder,
    name: fieldName,
    error
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: key,
    ref: inputRef
  }, childrenWithProps));
};

export default Field;