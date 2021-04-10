import { useContext, useEffect, useState } from 'react';
import { formStore } from '../../store';

const MIN_VAL = 100000;
const MAX_VAL = 999999;

interface IFieldsProps {
    val: Array<any>;
    map: any;
    push: () => void;
    remove: (index: number) => void;
}

const useFields = (
    formName: string | undefined,
    fieldName: string
): IFieldsProps | null => {
    const { formState, dispatch } = useContext<any>(formStore);
    const [state, setState] = useState<Array<any>>([]);
    useEffect(() => {
        if (
            formState &&
            formName &&
            formState[formName] &&
            formState[formName][fieldName]
        ) {
            setState(
                formState[formName][fieldName].map((field: any, i: number) => {
                    if (!field) return null;
                    if (state[i]?.id)
                        return (state[i] = { ...state[i], ...field });
                    const id =
                        Math.floor(Math.random() * (MAX_VAL - MIN_VAL)) +
                        MIN_VAL;
                    return (state[i] = { id });
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState]);

    let fields = null;
    if (formState && formName) {
        fields = {
            val:
                formState[formName] && formState[formName][fieldName]
                    ? formState[formName][fieldName]
                    : [],
            map: function (
                func: (a: string, i: number, val: any) => Array<any>
            ) {
                return state.map((value: any, i: any) => {
                    return func(
                        `${i}.${value.id}.${formName}.${fieldName}`,
                        i,
                        this
                    );
                });
            },
            push: function () {
                this.val.push({});
                return dispatch({
                    type: 'change-form',
                    payload: { [formName]: { [fieldName]: this.val } },
                });
            },
            remove: function (index: number) {
                if (formState[formName] && formState[formName][fieldName]) {
                    this.val = this.val.filter(
                        (field: any, i: number) => i !== index
                    );
                    setState(state.filter((item, i) => i !== index));
                    dispatch({
                        type: 'change-form',
                        payload: {
                            [formName]: {
                                [fieldName]: this.val,
                            },
                        },
                    });
                }
            },
        };
    }
    return fields;
};

export default useFields;
