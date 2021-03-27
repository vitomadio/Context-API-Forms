import { Dispatch } from 'react';

interface IAction {
    type: string;
    payload: object;
}

export const setFormAction: Function = (
    formName: string,
    fieldName: string,
    value: any,
    dispatch: Dispatch<IAction>
): void => {
    dispatch({
        type: 'change-form',
        payload: { [formName]: { [fieldName]: value } },
    });
};

export const setFormSectionAction: Function = (
    formState: any,
    formName: string,
    formSectionName: string,
    fieldName: string,
    value: any,
    dispatch: Dispatch<IAction>
): void => {
    if (formState[formName] && formState[formName][formSectionName] != null) {
        dispatch({
            type: 'change-form',
            payload: {
                [formName]: {
                    [formSectionName]: {
                        ...formState[formName][formSectionName],
                        [fieldName]: value,
                    },
                },
            },
        });
    } else {
        dispatch({
            type: 'change-form',
            payload: {
                [formName]: {
                    [formSectionName]: { [fieldName]: value },
                },
            },
        });
    }
};

export const setFieldArrayAction: Function = (
    formState: any,
    fieldName: string,
    value: any,
    dispatch: Dispatch<IAction>
): void => {
    const [index, formName, fieldArrayName, name] = fieldName.split('.');
    dispatch({
        type: 'change-form',
        payload: {
            [formName]: {
                [fieldArrayName]: formState[formName][fieldArrayName].map(
                    (field: object, i: number) => {
                        if (Object.keys(field)[0] === index) {
                            return (field = {
                                [Object.keys(field)[0]]: { [name]: value },
                            });
                        }
                        return field;
                    }
                ),
            },
        },
    });
};
