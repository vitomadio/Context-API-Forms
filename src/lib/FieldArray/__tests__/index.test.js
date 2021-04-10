import React from 'react';
import { render } from '@testing-library/react';
import FieldArray from '../index';
import HobbiesComponent from '../../../HobbiesComponent';

describe('Form', () => {
    test('Test Form render with children', () => {
        const form = render(
            <FieldArray
                formName="myForm"
                name="hobbies"
<<<<<<< Updated upstream
                component={HobbiesComponent}
=======
                component={<HobbiesComponent />}
>>>>>>> Stashed changes
            />
        );
        expect(form).toMatchSnapshot();
    });
});
