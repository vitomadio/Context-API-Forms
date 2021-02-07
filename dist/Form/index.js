import React from "react";

const Form = ({
  formName,
  children
}) => {
  const childrenWithProps = React.Children.map(children, child => {
    return /*#__PURE__*/React.cloneElement(child, {
      formName,
      key: child.props.fieldName
    });
  });
  return /*#__PURE__*/React.createElement("form", {
    name: formName
  }, childrenWithProps);
};

export default Form;