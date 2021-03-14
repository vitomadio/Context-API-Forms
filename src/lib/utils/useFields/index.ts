import { useContext } from 'react';
import { formStore } from '../../store';

const useFields = (formName: string | undefined, fieldName: string) => {
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

            map: function (this: any, func: Function) {
                const arr = [];
                for (let i = 0; i < this.val.length; i++) {
                    arr.push(
                        func(
                            {
                                index: i,
                                name: this.val[i],
                                fieldArrayName: fieldName,
                                formName: formName,
                            },
                            i,
                            this.val
                        )
                    );
                }
                return arr;
            },
            push: function (this: any) {
                if (formState[formName] && formState[formName][fieldName]) {
                    this.val.push(formState[formName][fieldName].length + 1);
                    return dispatch({
                        type: 'change-form',
                        payload: { [formName]: { [fieldName]: this.val } },
                    });
                } else {
                    this.val.push(0);
                    return dispatch({
                        type: 'change-form',
                        payload: { [formName]: { [fieldName]: this.val } },
                    });
                }
            },
            remove: function (index: number) {
                if (formState[formName] && formState[formName][fieldName]) {
                    this.val.splice(index, 1);
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
