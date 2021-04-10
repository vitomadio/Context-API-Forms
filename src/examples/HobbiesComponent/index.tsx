import React from 'react';
import Field from '../../lib/Field';
import Input from '../input-samples/Input';

interface IFieldsProps {
    val: Array<any>;
    map: any;
    push: () => void;
    remove: (index: number) => void;
}

const HobbiesComponent = (fields: IFieldsProps): React.ReactNode | null => (
    <>
        <div>
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    fields.push();
                }}
            >
                Add Hobby
            </button>
        </div>
        <div>
            {fields &&
                fields.map(
                    (hobby: string, index: number, fields: IFieldsProps) => (
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
                                component={Input}
                                label={`Name #${index + 1}`}
                            />
                        </div>
                    )
                )}
        </div>
    </>
);

export default HobbiesComponent;
