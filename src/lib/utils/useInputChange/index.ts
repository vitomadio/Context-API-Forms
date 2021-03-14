import { useContext, useEffect } from 'react';
import { formStore } from '../../store';

const useInputChange = (
    ref: { current: HTMLElement },
    type: string | undefined,
    formName: string | undefined,
    fieldName: string,
    formSectionName: string | undefined,
    fieldArrayName: string | undefined,
    index: number | undefined
): void => {
    const { formState, dispatch } = useContext(formStore);
    useEffect(() => {
        const current = ref.current;
        const inputChange = (event: Event): any => {
            const target = event.target as HTMLInputElement;
            let value: any = target.value || null;
            if (type === 'number') {
                if (!value || value === 0) {
                    value = null;
                }
                value = parseInt(value);
            }
            if (type === 'checkbox') {
                value = target.checked;
                if (value !== true) {
                    value = false;
                }
            }
            if (formName) {
                if (formSectionName) {
                    if (
                        formState[formName] &&
                        formState[formName][formSectionName] != null
                    ) {
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
                } else if (fieldArrayName && index != null) {
                    if (
                        formState[formName] &&
                        formState[formName][fieldArrayName] != null &&
                        Object.keys(formState[formName][fieldArrayName])
                            .length !== 0
                    ) {
                        if (!fieldName) {
                            dispatch({
                                type: 'change-form',
                                payload: {
                                    [formName]: {
                                        [fieldArrayName]: formState[formName][
                                            fieldArrayName
                                        ].map((field: object, i: number) =>
                                            i === index ? value : field
                                        ),
                                    },
                                },
                            });
                        } else {
                            dispatch({
                                type: 'change-form',
                                payload: {
                                    [formName]: {
                                        [fieldArrayName]: formState[formName][
                                            fieldArrayName
                                        ].map((field: object, i: number) =>
                                            i === index
                                                ? { [fieldName]: value }
                                                : field
                                        ),
                                    },
                                },
                            });
                        }
                    }
                } else {
                    dispatch({
                        type: 'change-form',
                        payload: { [formName]: { [fieldName]: value } },
                    });
                }
            }
        };
        ref.current.addEventListener('change', inputChange);
        return () => {
            current.removeEventListener('change', inputChange);
        };
    }, [ref, dispatch, formSectionName, fieldName, formName, type, formState]);
};

export default useInputChange;
