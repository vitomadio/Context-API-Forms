import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { FormProvider } from './lib/store';
import App from './App';

const rootElement: Element | DocumentFragment | null = document.getElementById(
    'root'
);
const app: JSX.Element = (
    <StrictMode>
        <FormProvider>
            <App />
        </FormProvider>
    </StrictMode>
);

ReactDOM.render(app, rootElement);
