import React from 'react';
import { render } from '@testing-library/react';
import FormSection from '../index';
import Field from '../../Field';
import Input from '../../input-samples/Input';

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
                children={<Field children={<Input />} />}
            />
        );
        expect(form).toMatchSnapshot();
    });
});
