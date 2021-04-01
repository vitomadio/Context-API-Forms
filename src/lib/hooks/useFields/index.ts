import { useContext } from 'react';
import { formStore } from '../../store';

interface IFieldsProps {
    val: Array<any>;
    map: any;
    push: () => void;
    remove: (index: number) => void;
}

const useFields: Function = (
    formName: string | undefined,
    fieldName: string
): IFieldsProps | null => {
    const { formState, dispatch } = useContext<any>(formStore);
    let fields: IFieldsProps | null = null;
    if (formState && formName) {
        fields = {
            val:
                formState[formName] && formState[formName][fieldName]
                    ? formState[formName][fieldName]
                    : [],
            map: function (func: Function) {
                return [...this.val].map((value: any, i: any) =>
                    func(`${i}.${formName}.${fieldName}`, i)
                );
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
                    this.val = this.val.filter((field, i) => i !== index);
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
