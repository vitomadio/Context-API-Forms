import React from 'react';
import Form from '../lib/Form';
import Input from '../input-samples/Input';
import Field from '../lib/Field';
import FormSection from '../lib/FormSection';
import TextArea from '../input-samples/TextArea';
import Selector from '../input-samples/Selector';
import Validation from '../utils/validations';

const Required = Validation.required;

const FormComponent: React.FC = (): JSX.Element => {
    return (
        <Form formName="my-form">
            <Field fieldName="name" label="Name" validations={[Required]}>
                <Input />
            </Field>
            <Field
                fieldName="lastname"
                label="Last Name"
                validations={[Required]}
            >
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
            <FormSection fieldArrayName="address">
                <Field fieldName="street" type="text">
                    <Input type="text" />
                </Field>
                <Field fieldName="city" type="text">
                    <Input type="text" />
                </Field>
                <Field fieldName="zip-code" type="text">
                    <Input type="text" />
                </Field>
            </FormSection>
        </Form>
    );
};

export default FormComponent;
