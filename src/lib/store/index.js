import React, { createContext, useReducer } from 'react';

const initialState = {};
const formStore = createContext(initialState);
const { Provider } = formStore;

const FormProvider = ({ children }) => {
    const [formState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'change-form':
                return {
                    ...state,
                    [Object.keys(action.payload)[0]]: {
                        ...state[Object.keys(action.payload)[0]],
                        ...Object.values(action.payload)[0],
                    },
                };
            case 'set-initial-values':
                return { ...action.payload };

            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ formState, dispatch }}>{children}</Provider>;
};

export { formStore, FormProvider };
