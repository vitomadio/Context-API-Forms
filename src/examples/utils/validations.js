const Validation = {
  required: (value) => {
    return !value || value === "" ? true : false;
  }
};

export default Validation;
