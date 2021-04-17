export const isValidReactComponent = (element: any): boolean => {
    return typeof element.type !== 'string';
};
