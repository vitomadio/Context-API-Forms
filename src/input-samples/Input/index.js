import React from "react";

const Input = ({ type, error, name }) => {
  return (
    <>
        <label htmlFor={name}>Name
          <input type={type} id={name}/>
          {error && <p>Required</p>}
        </label>
    </>
  );
};

export default Input;
