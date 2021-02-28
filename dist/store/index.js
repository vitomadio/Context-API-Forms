import React, { createContext, useReducer } from 'react';
const initialState = {};
const formStore = /*#__PURE__*/createContext(initialState);
const {
  Provider
} = formStore;

const FormProvider = ({
  children
}) => {
  const [formState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'change-form':
        return { ...state,
          [Object.keys(action.payload)[0]]: { ...state[Object.keys(action.payload)[0]],
            ...Object.values(action.payload)[0]
          }
        };

      case 'set-initial-values':
        return { ...action.payload
        };

      default:
        return state;
    }
  }, initialState);
  return /*#__PURE__*/React.createElement(Provider, {
    value: {
      formState,
      dispatch
    }
  }, children);
};

export { formStore, FormProvider };