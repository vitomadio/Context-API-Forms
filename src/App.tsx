import React, { useContext } from 'react';
import { formStore } from 'lib/store';
import FormComponent from './examples/FormComponent';
<<<<<<< Updated upstream
import useSetInitialValues from 'lib/hooks/useSetInitialValues';

const App: React.FC = (): JSX.Element => {
    const { formState }: any = useContext<any>(formStore);
=======
import useSetInitialValues from 'lib/utils/useSetInitialValues';

const App: React.FC = (): JSX.Element => {
    const { formState }: any = useContext<object>(formStore);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            <FormComponent />
=======
            <FormComponent onSubmit={(values: any) => console.log(values)} />
>>>>>>> Stashed changes
            {JSON.stringify(formState, null, 4)};
        </div>
    );
};

export default App;
