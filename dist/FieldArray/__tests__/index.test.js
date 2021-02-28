import React from "react";
import { render } from "@testing-library/react";
import FieldArray from "../index";
import Field from '../../Field';
import Input from '../../input-samples/Input';
describe('Form', () => {
  test("Test Form render w/o children", () => {
    const form = render( /*#__PURE__*/React.createElement(FieldArray, null));
    expect(form).toMatchSnapshot();
  });
  test("Test Form render with children", () => {
    const form = render( /*#__PURE__*/React.createElement(FieldArray, {
      formName: "myForm",
      fieldArrayName: "Adress",
      children: /*#__PURE__*/React.createElement(Field, {
        children: /*#__PURE__*/React.createElement(Input, null)
      })
    }));
    expect(form).toMatchSnapshot();
  });
});