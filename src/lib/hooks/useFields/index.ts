import { useContext } from 'react';
import { formStore } from '../../store';

const useFields: Function = (
    formName: string | undefined,
    fieldName: string
): object | null => {
    const { formState, dispatch } = useContext<any>(formStore);
    let fields = null;
    if (formName && dispatch && formState) {
        fields = {
            val:
                formState &&
                formState[formName] &&
                formState[formName][fieldName]
                    ? formState[formName][fieldName]
                    : [],
            map: function (func: Function) {
                const arr = [];
                for (let i = 0; i < this.val.length; i++) {
                    arr.push(
                        func(
                            `${
                                Object.keys(this.val[i])[0]
                            }.${formName}.${fieldName}`,
                            i,
                            Object.values(this.val[i])[0]
                        )
                    );
                }
                return arr;
            },
            push: function () {
                let index = this.val.length;
                this.val.push({ [index]: {} });
                return dispatch({
                    type: 'change-form',
                    payload: { [formName]: { [fieldName]: this.val } },
                });
            },
            remove: function (index: number) {
                if (formState[formName] && formState[formName][fieldName]) {
                    this.val = [...this.val].filter((field, i) => i !== index);
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
