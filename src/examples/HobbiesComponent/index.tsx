import * as React from 'react';
import Field from '../../lib/Field';
import Input from '../input-samples/Input';

interface IFieldsProps {
    val: Array<any>;
    map: any;
    push: () => void;
    remove: (index: number) => void;
}

const HobbiesComponent: React.FC<IFieldsProps> = (
    fields: IFieldsProps
): JSX.Element | null => (
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
                fields.map((hobby: string, index: number, val: any) => (
                    <div key={index}>
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
                ))}
        </div>
    </>
);

export default HobbiesComponent;
