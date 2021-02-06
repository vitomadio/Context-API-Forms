import React from "react";

const FieldArray = ({
  formName,
  fieldArrayName,
  children
}) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    return /*#__PURE__*/React.cloneElement(child, {
      fieldArrayName,
      formName,
      key: child.props.fieldName
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    name: fieldArrayName
  }, childrenWithProps);
};

export default FieldArray;