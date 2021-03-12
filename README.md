## Context-Api-Forms

Is a very lightweight Higher Order Component that uses Context API to manage form state.

### Motivation

Looking for a lighter alternative to redux-forms in order to manage form state with context.

### Instalation

`$ npm install --save context-api-form`
or
`$ yarn add context-api-form`

### How to use

**1.** Wrap your app root component with FormProvider:

```
import {FormProvider} from 'context-api-forms';
    // Some code here...
<FormProvider>
    <App />
</FormProvider>
```

**2.** Prepare your a custom child component for your different fields:

```
import React from 'react';

const Input = ({ type, error, name, ...props }) => {
  return (
    <>
      <label htmlFor={name}>
        {props.label && `${props.label}: `}
          <input type={type} id={name}/>
          {error && <p>Required</p>}
        </label>
    </>
  );
};

export default Input;
```

This could be any type of HTML input type.

**3.** Use your custom component as a prop in a Field component, this will add all the logic to update the state.

```
import { Form, Field } from 'context-api-form';
    // Some code here...

<Form name="my-form" handleSubmit={onSubmit}>
    <Field fieldName="name" label="Name" component={<Input />} />
<Form>
```

**4.** In case you need a nested form, you can use a FormSection as follows:

```
import { Form, Field, FieldArrayForm } from 'context-api-form';
    // Some code here...

<Form formName="my-form" handleSubmit={onSubmit}>
    <Field name="name" label="Name" component={<Input />} />
    <FormSection name="address">
        <Field name="steet" type="text" component={<Input />} />
        <Field name="city" type="text" component={<Input />} />
        <Field name="zip-code" type="text" component={<Input />} />
    </FormSection>
<Form>
```

Te example above will result in the following object representation:

```
{
    my-form: {
        name: 'name',
        address: {
            street: '4th Avenue S.W.Calgary,',
            city: 'Ablerta',
            zip-code: '12345'
        }
    }
}
```

**5.** To get your state, you just need to use the hook **useContext()** has follows:

```
import { formStore } from 'context-api-forms';
    // Some code here...

const {formState} = React.useContext(formStore);
console.log(formState)
```

**NOTE:** We recommend using formState as the name of the state in order to avoid confusions with other states.

### Form

Acting as a html form tag, Form component is used to give a name to the form in the context state.

### Properties:

-   **name \<string> [Required]**: The only property needed and required to name your form.
-   **handleSubmit \<Function> [Required]**: Recives a function from parent component and injects the form values into it.

### Field

Is a Hight Order Component which wraps input types children components in order to entablish a connection with the Context Api.

### Properties:

-   **key \<string>**: Passes an unique key to child component.
-   **name \<string> [Required]**: Used for naming your input, the same will be used to name the field in the state.
-   **type \<string>**: Used for input type.
-   **placeholder \<string>**: Html placeholder attribute.
-   **label \<string>**: Used for labeling fields.
-   **error \<boolean>**: Used for validations, whether there is or there isn't an error.
-   **validations \<[function]>**: Used for validations, the functions must return a boolean which will be used by the error property to pass error existence to the child component.
-   **defaultValue \<any>**: In case of any default value exists it will be passed through "defaultValue" property.

### FormSection

The FormSection component lets create a sub-tree as a field in the form, assigning a name to this sub group. Allowing to make multiple levels of nested fields.

### Properties:

-   **name \<string> [Required]**: Used for naming your nested group of fields.

### Form validations

Use your own form validations functions, just pass the validations as an array of functions. The returned value of these validations functions must be a boolean, where true will trigger an error and false won't.

Example of how to use custom validations:

```
const Required = (value) => {
return !value || value === "" ? true : false;
}
...
<Field fieldName="name" label="Name"typevalidations={[Required]} label="Name">
    //Check step 2 on how to prepare child component section for more details.
    <Input />
</Field>
```

### Initial Values

You can initialize your form with default values using the **useSetInitialValues** hook in an upper component in the tree.
Call the hook sending the form as a tree object in parameters.

```
import { useSetInitialValues } from 'context-api-forms';

function App(){
    useSetInitialValues({
        'my-form': {
            name: 'John',
            lastname: 'Doe',
        }
    });
    return <FormComponent />
}
export default App;
```
