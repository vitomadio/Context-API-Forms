import React from 'react';
import { render } from '@testing-library/react';
import FieldArray from '../index';
import HobbiesComponent from '../../../examples/HobbiesComponent';

describe('Form', () => {
    test('Test Form render with children', () => {
        const form = render(
            <FieldArray
                formName="myForm"
                name="hobbies"
                component={HobbiesComponent}
            />
        );
        expect(form).toMatchSnapshot();
    });
});
