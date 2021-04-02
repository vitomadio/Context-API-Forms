export const setValue = (
    target: HTMLInputElement,
    value: any,
    type: string | undefined
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
