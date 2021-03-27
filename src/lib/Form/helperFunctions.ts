export const isValidReactComponent: Function = (element: any): boolean => {
    return typeof element.type !== 'string';
};
