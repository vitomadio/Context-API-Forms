import React, { useContext } from 'react';
import { formStore } from './lib/store';
import FormComponent from './FormComponent';
import useSetInitialValues from './lib/useSetInitialValues';

import './styles.css';

const App: React.FC = (): JSX.Element => {
    const { formState }: any = useContext<object>(formStore);

    useSetInitialValues({
        'my-form': {
            name: 'Vito',
            lastname: 'Madio',
            sex: 'Male',
            'receive-email': true,
            address: {
                street: 'Via Benigno Zaccagnini 10',
            },
        },
    });

    return (
        <div className="App">
            <FormComponent />
            {JSON.stringify(formState, null, 4)};
        </div>
    );
};

export default App;
