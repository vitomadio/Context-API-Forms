import React from "react";

const Input = ({ type, error, name, ...props }) => {
  return (
    <>
      <label htmlFor={name}>
        {props.label && `${props.label}: `}
          <input type={type} id={name}/>
          {error && <p>Required</p>}
        </label>
    </>
  );
};

export default Input;
