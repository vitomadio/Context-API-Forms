import * as React from 'react';
import Field from '../lib/Field';
import Input from '../input-samples/Input';

const HobbiesComponent: React.FunctionComponent<any> = ({ fields }) =>
    fields && fields.val ? (
        <>
            <div>
                <button
                    type="button"
                    onClick={(e) => {
                        fields.push();
                    }}
                >
                    Add Hobby
                </button>
            </div>
            {fields.map(({ ...field }, index: number) => (
                <div key={index}>
                    <button
                        type="button"
                        onClick={() => fields.remove(index, 1)}
                    >
                        Remmove Hobby
                    </button>
                    <Field
                        {...field}
                        name="hobby"
                        type="text"
                        component={<Input />}
                        label={`Hobby #${index + 1}`}
                    />
                </div>
            ))}
        </>
    ) : null;

export default HobbiesComponent;
