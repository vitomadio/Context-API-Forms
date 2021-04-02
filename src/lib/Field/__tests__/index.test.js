import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Field from '../index';
import fieldProps from '../__mocks__/fieldProps.json';
import Input from '../../../examples/input-samples/Input';

describe('Field', () => {
    test('Test Field render w/o props', () => {
        const form = render(<Field component={Input} />);
        expect(form).toMatchSnapshot();
    });

    test('Test Field render with props', () => {
        render(
            <Field
                type={fieldProps.type}
                formName={fieldProps.formName}
                fieldName={fieldProps.fieldName}
                label={fieldProps.label}
                component={Input}
            />
        );
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen).toMatchSnapshot();
    });
});
