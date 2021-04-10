import { useContext } from 'react';
import { formStore } from '../../store';

const useFields: Function = (
    formName: string | undefined,
    fieldName: string
): object | null => {
    const { formState, dispatch } = useContext<any>(formStore);
<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    this.val = this.val.filter(
                        (field: any, i: number) => i !== index
                    );
                    setState(state.filter((item, i) => i !== index));
=======
                    this.val = [...this.val].filter((field, i) => i !== index);
>>>>>>> Stashed changes
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
