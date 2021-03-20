import * as React from 'react';
import Field from '../lib/Field';
import Input from '../input-samples/Input';

const HobbiesComponent: React.FC<any> = ({
    fields,
}: any): JSX.Element | null => (
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
        {fields &&
            fields.val &&
            fields.map((hobby: string, index: number) => (
                <div key={index}>
                    <button
                        type="button"
                        onClick={() => fields.remove(index, 1)}
                    >
                        Remmove Hobby
                    </button>
                    <Field
                        name={`${hobby}.name`}
                        type="text"
                        component={<Input />}
                        label={`Hobby #${index + 1}`}
                    />
                </div>
            ))}
    </>
);

export default HobbiesComponent;
