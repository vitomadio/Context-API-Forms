export const setValue: Function = (
    target: HTMLInputElement,
    value: any,
    type: string
): boolean => {
    if (type === 'number') {
        if (!value || value === 0) {
            value = null;
        }
        value = parseInt(value);
    }
    if (type === 'checkbox') {
<<<<<<< HEAD
        value = target.checked;
=======
        value = target.value;
>>>>>>> master
        if (value !== true) {
            value = false;
        }
    }
    return value;
};
