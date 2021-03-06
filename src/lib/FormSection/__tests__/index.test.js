import React from 'react';
import { render } from '@testing-library/react';
import FormSection from '../index';
import Field from '../../Field';
import Input from '../../../examples/input-samples/Input';

describe('Form', () => {
    test('Test Form render w/o children', () => {
        const form = render(<FormSection />);

        expect(form).toMatchSnapshot();
    });

    test('Test Form render with children', () => {
        const form = render(
            <FormSection
                formName="myForm"
                fieldArrayName="Adress"
                children={<Field component={Input} />}
            />
        );
        expect(form).toMatchSnapshot();
    });
});
