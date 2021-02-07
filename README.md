### Context-Api-Forms

Is a Higher Order Component that uses Context API to keep form state in a context api store.

##### Motivation

Looking for a lightest alternative to redux-forms for managing forms state.

##### Instalation

`$ npm install --save context-api-form`
or
`$ yarn add context-api-form`

##### How to use

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
import React from "react";

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

**5.** To get your state, you just neet to use the hook useContext() has follows:

```
import { formStore } from 'context-api-forms';
    // Some code here...

const {state} = React.useContext(formStore);
```

##### Form validations

Comming soon...
