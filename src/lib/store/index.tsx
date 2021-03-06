import React, { createContext, useReducer } from 'react';

interface IFormProviderProps {
    children: JSX.Element[] | JSX.Element;
}

export interface IAction {
    type: string;
    payload: object;
}

const initialState: any = {};
const formStore: React.Context<any> = createContext<object>(initialState);
const { Provider } = formStore;

const FormProvider = ({ children }: IFormProviderProps): JSX.Element => {
    const [formState, dispatch] = useReducer((state: any, action: IAction) => {
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
