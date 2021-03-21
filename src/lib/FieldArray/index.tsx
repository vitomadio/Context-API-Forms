import React from 'react';
import useFields from '../utils/useFields';

interface IFieldArrayProps {
    formName?: string;
    name: string;
    component: React.ReactElement<any>;
}

const FieldArray: React.FC<IFieldArrayProps> = ({
    name,
    component,
    formName,
}: IFieldArrayProps): JSX.Element => {
    const fields: object = useFields(formName, name);
    const childComponent: React.ReactElement<any> = React.cloneElement(
        component,
        {
            fields,
        }
    );
    return <div>{childComponent}</div>;
};

export default FieldArray;
