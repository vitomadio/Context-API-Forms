import React, { useContext } from 'react';
import { formStore } from 'lib/store';
import FormComponent from './examples/FormComponent';
import useSetInitialValues from 'lib/hooks/useSetInitialValues';

const App: React.FC = (): JSX.Element => {
    const { formState }: any = useContext<object>(formStore);

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
            <FormComponent onSubmit={(values: any) => console.log(values)} />
            {JSON.stringify(formState, null, 4)};
        </div>
    );
};

export default App;
