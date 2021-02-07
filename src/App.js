import React, { useContext } from "react";
import { formStore } from "./lib/store";
import Form from "./lib/Form";
import Field from "./lib/Field";
import Input from "./lib/input-samples/Input";
import TextArea from "./lib/input-samples/TextArea";
import Selector from "./lib/input-samples/Selector";
import FieldArray from "./lib/FieldArray";
import Validation from "./utils/validations";

import "./styles.css";

const Required = Validation.required;

export default function App() {
  const { state } = useContext(formStore);

  return (
    <div className="App">
      <Form formName="my-form">
        <Field fieldName="name" label="Name" validations={[Required]}>
          <Input />
        </Field>
        <Field fieldName="lastname" label="Last Name" validations={[Required]}>
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
      {JSON.stringify(state, null, 4)};
    </div>
  );
}
