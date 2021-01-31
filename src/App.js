import React, { useContext } from "react";
import { store } from "./store";
import Form from "./Form";
import Field from "./Field";
import Input from "./input-samples/Input";
import TextArea from "./input-samples/TextArea";
import Selector from "./input-samples/Selector";
import FieldArray from "./FieldArray";
import Validation from "./utils/validations";

import "./styles.css";

const Required = Validation.required;

export default function App() {
  const { state } = useContext(store);

  console.log(JSON.stringify(state, null, 4));

  return (
    <div className="App">
      <Form formName="my-form">
        <Field fieldName="name" validations={[Required]}>
          <Input />
        </Field>
        <Field fieldName="lastname" validations={[Required]}>
          <Input />
        </Field>
        <Field fieldName="description">
          <TextArea />
        </Field>
        <Field fieldName="receive-email" type="checkbox">
          <Input />
        </Field>
        <Field fieldName="age" type="number" validations={[Required]}>
          <Input />
        </Field>
        <Field fieldName="sex" type="text">
          <Selector />
        </Field>
        <FieldArray fieldArrayName="address">
          <Field fieldName="steet" type="text">
            <Input type="text" />
          </Field>
          <Field fieldName="city" type="text">
            <Input type="text" />
          </Field>
          <Field fieldName="zip-code" type="text">
            <Input type="text" />
          </Field>
        </FieldArray>
      </Form>
    </div>
  );
}
