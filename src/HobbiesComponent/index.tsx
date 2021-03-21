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
        <div>
            {fields &&
                fields.map((hobby: string, index: number, val: any) => (
                    <div key={hobby}>
                        <button
                            type="button"
                            onClick={() => fields.remove(index)}
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
        </div>
    </>
);

export default HobbiesComponent;
