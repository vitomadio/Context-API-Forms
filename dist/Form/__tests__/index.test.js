import React from "react";
import { render } from "@testing-library/react";
import Form from "../index";
import Field from '../../Field';
import Input from '../../input-samples/Input';
describe('Form', () => {
  test("Test Form render w/o children", () => {
    const form = render( /*#__PURE__*/React.createElement(Form, null));
    expect(form).toMatchSnapshot();
  });
  test("Test Form render with children", () => {
    const form = render( /*#__PURE__*/React.createElement(Form, {
      formName: 'myForm',
      children: /*#__PURE__*/React.createElement(Field, {
        children: /*#__PURE__*/React.createElement(Input, null)
      })
    }));
    expect(form).toMatchSnapshot();
  });
});