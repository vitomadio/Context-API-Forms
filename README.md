### Context-Api-Forms

Is a Higher Order Component that uses Context API to keep form state in a context api store.

#### Motivation

Looking for a lightest alternative to redux-forms for managing forms state.

#### Instalation

`$ npm install --save context-api-form`
or
`$ yarn add context-api-form`

#### How to use

**1.** Wrap your app root component:

```
import {FormProvider} from 'context-api-forms';
    // Some code here...
<FormProvider>
    <App />
</FormProvider>
```

**2.** Prepare your child component:

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

This could be an input, select or textarea.

**3.** Wrap your custom child component with context-api-forms wrappers.

```
import { Form, Field } from 'context-api-form';
    // Some code here...

<Form formName="my-form">
    <Field fieldName="name" label="Name">
        </Input> // Your custom child component here.
    </Field>
<Form>
```

**4.** Also if you need a nested form, you can use a FieldArray as follows:

```
import { Form, Field, FieldArrayForm } from 'context-api-form';
    // Some code here...

<Form formName="my-form">
    <Field fieldName="name" label="Name">
        </Input> // Your custom child component here.
    </Field>
    <FieldArray fieldArrayName="address">
        <Field fieldName="steet" type="text">
            <Input />
        </Field>
        <Field fieldName="city" type="text">
            <Input />
        </Field>
        <Field fieldName="zip-code" type="text">
            <Input />
        </Field>
    </FieldArray>
<Form>
```

It will result in the following object representation:

```
{
    my-form: {
        name: 'name',
        adress: {
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

const {state} = React.useContext(formStore);
```

#### Field properties:

-   **key \<string>**: Passes an unique key to child component.
-   **forName \<string>**: Used for naming your input, the same will be used to name the field in the state.
-   **type \<string>**: Used for input type.
-   **placeholder \<string>**: Html placeholder attribute.
-   **label \<string>**: Used for labeling fields.
-   **error \<boolean>**: Used for validations, whether there is or there isn't an error.
-   **validations \<[function]>**: Used for validations, the functions must return a boolean which will be used by the error property to pass error existence to the child component.
-   **defaultValue \<any>**: In case of any default value exists it will be passed through "defaultValue" property.

#### Form validations

You can use your own form validations functions, just pass the validations as an array of functions. The returned value of these validations functions must be a boolean, where true will trigger an error and false won't.

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

#### Initial Values

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
