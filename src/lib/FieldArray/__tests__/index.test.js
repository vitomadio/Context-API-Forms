import React from "react";
import { render } from "@testing-library/react";
import FieldArray from "../index";
import Field from '../../../Field';
import Input from '../../input-samples/Input';

describe('Form', () => {
  test("Test Form render w/o children", () => {
    const form = render( <FieldArray /> );
  
    expect(form).toMatchSnapshot();
  });

  test("Test Form render with children", () => {
    const form = render(
      <FieldArray formName="myForm" fieldArrayName="Adress"
        children={<Field children={<Input />}/>}
      />
    );
    expect(form).toMatchSnapshot();
  });
});