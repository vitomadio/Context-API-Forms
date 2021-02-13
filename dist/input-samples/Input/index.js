import React from "react";

const Input = ({
  type,
  error,
  name,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, props.label && `${props.label}: `, /*#__PURE__*/React.createElement("input", {
    type: type,
    id: name
  }), error && /*#__PURE__*/React.createElement("p", null, "Required")));
};

export default Input;