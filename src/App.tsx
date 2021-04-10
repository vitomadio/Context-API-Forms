import React, { useContext } from 'react';
import { formStore } from 'lib/store';
import FormComponent from './examples/FormComponent';
import useSetInitialValues from 'lib/hooks/useSetInitialValues';

function createDomElement(obj: any, i: number): React.ReactNode {
    return Object.entries(obj).map(([key, val]) => {
        if (Object.prototype.toString.call(val) === '[object Object]') {
            return React.createElement(
                'div',
                i >= 0 ? { style: { marginLeft: 48 } } : null,
                `{"${key}": `,
                createDomElement(val, 0),
                '}'
            );
        }
        return React.createElement(
            'div',
            { style: { marginLeft: 48 } },
            `{"${key}": ${JSON.stringify(val)}},`
        );
    });
}

const App: React.FC = (): JSX.Element => {
    const { formState }: any = useContext<any>(formStore);

    useSetInitialValues({
        'my-form': {
            name: 'Jhon',
            lastname: 'Doe',
            sex: 'Male',
            'receive-email': true,
            address: {
                street: '4th Avenue S.W.Calgary,',
            },
        },
    });

    return (
        <div className="App">
            <FormComponent />
            {createDomElement(formState, 0)}
        </div>
    );
};

export default App;
