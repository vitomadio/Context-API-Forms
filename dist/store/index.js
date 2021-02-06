// store.js
import React, { createContext, useReducer } from "react";
const initialState = {};
const formStore = /*#__PURE__*/createContext(initialState);
const {
  Provider
} = formStore;

const FormProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "change-form":
        return { ...state,
          [Object.keys(action.payload)[0]]: { ...state[Object.keys(action.payload)[0]],
            ...Object.values(action.payload)[0]
          }
        };

      default:
        throw new Error();
    }
  }, initialState);
  return /*#__PURE__*/React.createElement(Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

export { formStore, FormProvider };