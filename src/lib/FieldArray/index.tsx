import React from 'react';
import useFields from '../utils/useFields';

interface IFieldsProps {
    val: Array<any>;
    map: any;
    push: () => void;
    remove: (index: number) => void;
}

interface IFieldArrayProps {
    formName?: string;
    name: string;
    component(fields: IFieldsProps): React.ReactNode;
}

const FieldArray: React.FC<IFieldArrayProps> = ({
    name,
    component,
    formName,
}: IFieldArrayProps): JSX.Element => {
    const fields: IFieldsProps = useFields(formName, name);
    return <div>{component(fields)}</div>;
};

export default FieldArray;
