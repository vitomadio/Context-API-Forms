# Context API Forms

Is a lightweight Higher Order Component that uses React Context API to manage forms state.

## Motivation

Replicate Redux-Forms using Context API instead of Redux as state manager.

### Disclaimer

I'm by no means an expert in React.js, this is an ongoing project, and any advice or suggestion you could give will be kindly accepted. Feel free to check out the project and open new issues if you want to contribute.

## Installation

`$ npm install context-api-form` 

or 

`$ yarn add context-api-form`

## How to use

**1.** Wrap your app root component with FormProvider:

```jsx
import {FormProvider} from 'context-api-forms';
    // ...
<FormProvider>
    <App />
</FormProvider>
```

**2.** Prepare a custom child component for each kind of field i.e. The following Input component.

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

**NOTE:** This could be any type of HTML input type also, textarea, select, etc.

**3.** Pass your custom component as a component prop in a Field component, this will add all needed logic to update the state.

```jsx
import { Form, Field } from 'context-api-form';
    // ...
<Form name="my-form" handleSubmit={onSubmit}>
    <Field name="name" type="text" label="Name" component={Input} />
<Form>
```

**4.** In case you need nested fields, you can use a FormSection and go one level deeper in the form object as follows:

```jsx
import { Form, Field, FieldArrayForm } from 'context-api-form';
    // ...
<Form formName="my-form" handleSubmit={onSubmit}>
    <Field name="name" type="text" label="Name" component={Input} />
    <Field name="lastname" type="text" label="Lastname" component={Input} />
    <Field name="age" type="number" label="Age" component={Input} />
    <FormSection name="address">
        <Field name="steet" type="text" component={Input} />
        <Field name="city" type="text" component={Input} />
        <Field name="zip-code" type="text" component={Input} />
    </FormSection>
<Form>
```

The example above will result in the following object representation :

```javascript
{
    my-form: {
        name: 'John',
        lastname: 'Doe',
        age: 30,
        address: {
            street: '4th Avenue S.W.Calgary.',
            city: 'Ablerta',
            zip-code: '12345'
        }
    }
}
```

**5.** To get the form content from the state, you just need to use the hook **useContext\(\)** to retrieve it:

```jsx
import { formStore } from 'context-api-forms';
    // ...
const {formState} = React.useContext(formStore);
console.log(formState)
```

**NOTE:** Is strongly recommended to use **formState** as the name of the state in order to keep your form state separated from the general state.

## API

## Form

Acting as an HTML form tag, the Form component is used to give a name to the form in the context state.

### Props:

**name: String \[Required\]**

The only property needed and required to name your form.

**handleSubmit: \(values: any\) =&gt; void** 

Receives any function from the parent component and injects the form values into it.

## Field

Is a Hight Order Component which takes input components as props, this lets you connect your custom components with all the logic behind Context API Forms.

### Props:

**name: String \[Required\]**

Used for naming the field inside the form object.

**component: Component&lt;FieldProps&gt; \[Required\]**

Component passed as a prop, to which will be applied all extra properties needed to be controlled by the FormProvider.

**key: String**

Passes a unique key to the child component.

**type: String**  

Indicates the type of input you are using.

**placeholder: String**

Html placeholder attribute

**label: String**

Passes down a label attribute to the input component. 

**validations: Array&lt;Function&gt; \| \(value, props, name\) =&gt; error \[optional\]**

An array of functions used for validations, the functions must return a boolean which will be used by the error property to pass error existence to the child component.

**error: Boolean** 

This property will be passed automatically if there is a validation property.

**defaultValue: String** 

In case of any default value exists, it will be passed down through the "defaultValue" property.

**props: Object**

Pass any extra prop you need to the child component within an object.

## FormSection

The FormSection component lets create a sub-tree as a field in the form, assigning a name to this sub-group. This allows making multiple levels of nested fields.

### Props:

**name: String \[Required\]**

Used for naming your nested group of fields.

## FieldArray

FieldArray component as its name indicates creates an array of fields, this functionality is very handy to create lists of forms dynamically, by pushing forms into the list as needed.

### Props:

**name: String \[Required\]**

Used for naming the array of fields.

**component: Component&lt;FieldArrayProps&gt; \[Required\]**

The component ****that contains the logic needed to create a list of nested fields.

```jsx
<Form name='myForm' handleSubmit={onSubmit}>
    <FieldArray name='payment-methods' component={PaymentMethodsComponent} />
    <button type='submit'>Show Values</button>
</Form>
```

FieldArray passes to PaymentMethodsComponent the "_**fields**_" property which is an object that contains its own methods \(**push**, **map**, and **remove**\).

**NOTE:** Is very important to assign a key to every item in the list, using the first argument of the map method as the value, in order to make it work correctly. See the following example for details.

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
                Add Payment Method
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
                        label={`Pay Method #${index + 1}`}
                    />
                </div>
            ))}
    </>
);
```

In this particular example, we're using the paymethod.name as the name prop for the Field, this will result in an object inside the array where the key will be the word "name".

```javascript
{
    ...
    'payment-methods': [
        {name: 'PayPal'},
        {name: 'Credit Card'},
    ]
}
```

 You can also use just paymethod if you want only the value inside the array, i.e. 

```jsx
{
    ...
    'payment-methods': [
        'PayPal',
        'Credit Card',
    ]
}
```

## Form validations

Use your own form validations functions, just pass the validations as an array of functions. The returned value of these validations functions must be a boolean, where true will trigger an error and false won't.

Example of how to use custom validations:

```jsx
export const Required = (value) => {
return !value || value === "" ? true : false;
}
...
<Field 
    name="name" 
    label="Name"
    type="text"
    validations={[Required]} 
    label="Name"
    component={Input}
/>
```

## Initial Values

To initialize your form with default values use the **useSetInitialValues** hook in the parent component. Use the form tree object as argument, including all the fields needed with the initial values.

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

