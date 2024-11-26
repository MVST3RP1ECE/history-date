import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./resetCSS.scss"
import './style.scss';
import { Provider } from 'react-redux';
import { store } from './State/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);