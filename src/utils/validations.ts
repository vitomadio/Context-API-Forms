const Validation = {
    required: (value: string): boolean => {
        return !value || value === '' ? true : false;
    },
};

export default Validation;
