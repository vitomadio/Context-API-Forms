export const setValue: Function = (
    target: HTMLInputElement,
    value: any,
<<<<<<< Updated upstream
    type: string | undefined
=======
    type: string
>>>>>>> Stashed changes
): boolean => {
    if (type === 'number') {
        if (!value || value === 0) {
            value = null;
        }
        value = parseInt(value);
    }
    if (type === 'checkbox') {
        value = target.value;
        if (value !== true) {
            value = false;
        }
    }
    return value;
};
