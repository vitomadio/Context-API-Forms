// store.js
import React, { createContext, useReducer } from "react";

const initialState = {};
const formStore = createContext(initialState);
const { Provider } = formStore;

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "change-form":
        return {
          ...state,
          [Object.keys(action.payload)[0]]: {
            ...state[Object.keys(action.payload)[0]],
            ...Object.values(action.payload)[0]
          }
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { formStore, FormProvider };
