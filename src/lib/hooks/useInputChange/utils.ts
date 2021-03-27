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
        value = target.value;
        if (value !== true) {
            value = false;
        }
    }
    return value;
};
