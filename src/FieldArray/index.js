import React from "react";

const FieldArray = ({ formName, fieldArrayName, children }) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      fieldArrayName,
      formName,
      key: child.props.fieldName
    });
  });

  return <div name={fieldArrayName}>{childrenWithProps}</div>;
};

export default FieldArray;
