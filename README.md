# Context API Forms

Is a very lightweight Higher Order Component that uses Context API to manage form state.

## Motivation

Looking for a lighter alternative to redux-forms using React Context API.

## Installation

`$ npm install --save context-api-form` 

or 

`$ yarn add context-api-form`

## How to use

**1.** Wrap your app root component with FormProvider:

```jsx
import {FormProvider} from 'context-api-forms';
    // Some code here...
<FormProvider>
    <App />
</FormProvider>
```

**2.** Prepare a custom child component for your different fields:

```jsx
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

```jsx
import { Form, Field } from 'context-api-form';
    // Some code here...

<Form name="my-form" handleSubmit={onSubmit}>
    <Field fieldName="name" label="Name" component={Input} />
<Form>
```

**4.** In case you need a nested form, you can use a FormSection as follows:

```jsx
import { Form, Field, FieldArrayForm } from 'context-api-form';
    // Some code here...

<Form formName="my-form" handleSubmit={onSubmit}>
    <Field name="name" label="Name" component={Input} />
    <FormSection name="address">
        <Field name="steet" type="text" component={Input} />
        <Field name="city" type="text" component={Input} />
        <Field name="zip-code" type="text" component={Input} />
    </FormSection>
<Form>
```

The example above will result in the following object representation:

```javascript
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

**5.** To get your state, you just need to use the hook **useContext\(\)** as follows:

```jsx
import { formStore } from 'context-api-forms';
    // Some code here...

const {formState} = React.useContext(formStore);
console.log(formState)
```

**NOTE:** We recommend using **formState** as the name of the state in order to avoid confusion with other states.

## Form

Acting as an HTML form tag, the Form component is used to give a name to the form in the context state.

### Properties:

* **name &lt;string&gt; \[Required\]**: The only property needed and required to name your form.
* **handleSubmit &lt;string&gt; \[Required\]**: Receives a function from the parent component and injects the form values into it.

## Field

Is a Hight Order Component which wraps input types of children components in order to establish a connection with the Context API.

### Properties:

* **Component &lt;React Component&gt; \[Required\]:** Component passed as a prop, to which will be applied all extra properties needed to be controlled by the FormProvider.
* **key &lt;string&gt;**: Passes a unique key to the child component.
* **name &lt;string&gt; \[Required\]**: Used for naming your input, the same will be used to name the field in the state.
* **type &lt;string&gt;**: Used for input type.
* **placeholder &lt;string&gt;**: Html placeholder attribute.
* **label &lt;string&gt;**: Used for labeling fields.
* **error &lt;string&gt;**: Used for validations, whether there is or there isn't an error.
* **validations &lt;\[function\]&gt;**: Used for validations, the functions must return a boolean which will be used by the error property to pass error existence to the child component.
* **defaultValue &lt;string&gt;**: In case of any default value exists it will be passed through the "defaultValue" property.

## FormSection

The FormSection component lets create a sub-tree as a field in the form, assigning a name to this sub-group. Allowing to make multiple levels of nested fields.

### Properties:

* **name &lt;string&gt; \[Required\]**: Used for naming your nested group of fields.

## FieldArray

FieldArray component as its name stands creates an array of fields, this functionality is very handy to create lists of forms dynamically, pushing forms into the list.

### Properties:

* **name &lt;string&gt; \[Required\]**: Used for naming the array of fields.
* **component &lt;React Component&gt; \[Required\]**: The component which contains the logic needed to create a list of nested fields.

```jsx
<Form name='myForm' handleSubmit={onSubmit}>
    <FieldArray name='payment-methods' component={PaymentMethodsComponent} />
    <button type='submit'>Show Values</button>
</Form>
```

FieldArray passes to PaymentMethodsComponent the "_**fields**_" property which is an object that contains its own methods \(**push**, **map**, and **remove**\).

**NOTE:** Is very important to assign a key to every item in the list, using the first argument of the map function as the value, in order to it work correctly. See the following example for details.

```jsx
const PaymentMethodsComponent = ({ fields }) => (
    <>
        <div>
            <button
                type='button'
                onClick={(e) => {
                    fields.push();
                }}
            >
                Add Hobby
            </button>
        </div>
        {fields.map((paymethod, index) => (
                <div key={paymethod}>
                    <button type='button' onClick={() => fields.remove(index, 1)}>
                        Remmove Payment Method
                    </button>
                    <Field
                        name={`${paymethod}.name`}
                        type='text'
                        component={Input}
                        label={`Hobby #${index + 1}`}
                    />
                </div>
            ))}
    </>
);
```

## Form validations

Use your own form validations functions, just pass the validations as an array of functions. The returned value of these validations functions must be a boolean, where true will trigger an error and false won't.

Example of how to use custom validations:

```jsx
const Required = (value) => {
return !value || value === "" ? true : false;
}
...
<Field 
    fieldName="name" 
    label="Name"
    type="text"
    validations={[Required]} 
    label="Name"
    component={Input}
/>
```

## Initial Values

You can initialize your form with default values using the **useSetInitialValues** hook in an upper component in the tree. Call the hook sending the form as a tree object in parameters.

```jsx
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

