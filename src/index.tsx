import * as React from 'react';
import ReactDOM from 'react-dom';
import { FormProvider } from './lib/store';
import App from './App';

const rootElement: Element | DocumentFragment | null = document.getElementById(
    'root'
);
const app: JSX.Element = (
    <React.StrictMode>
        <FormProvider>
            <App />
        </FormProvider>
    </React.StrictMode>
);

ReactDOM.render(app, rootElement);
