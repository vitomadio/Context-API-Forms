import React from 'react';
import Form from '../../lib/Form';
import Input from '../input-samples/Input';
import Field from '../../lib/Field';
import FormSection from '../../lib/FormSection';
import FieldArray from '../../lib/FieldArray';
import TextArea from '../input-samples/TextArea';
import Selector from '../input-samples/Selector';
import HobbiesComponent from '../HobbiesComponent';
import Validation from '../utils/validations';

const Required = Validation.required;

const FormComponent: React.FC = (): JSX.Element => {
    return (
        <Form name="my-form">
            <Field
                name="name"
                label="Name"
                validations={[Required]}
                component={Input}
            />
            <Field
                name="lastname"
                label="Last Name"
                validations={[Required]}
                component={Input}
            />
            <Field
                name="description"
                label="Description"
                component={TextArea}
            />
            <Field
                name="receive-email"
                type="checkbox"
                label="Receive emails"
                component={Input}
            />
            <Field
                name="age"
                type="number"
                label="Age"
                validations={[Required]}
                component={Input}
            />
            <Field name="sex" type="text" label="Sex" component={Selector} />
            <FormSection name="address" label="Address">
                <Field name="street" type="text" component={Input} />
                <Field name="city" type="text" component={Input} />
                <Field name="zip-code" type="text" component={Input} />
            </FormSection>
            <FieldArray name="hobbies" component={HobbiesComponent} />
            <button type="submit">Print state</button>
        </Form>
    );
};

export default FormComponent;
