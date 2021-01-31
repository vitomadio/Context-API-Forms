// store.js
import React, { createContext, useReducer } from "react";

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
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
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
