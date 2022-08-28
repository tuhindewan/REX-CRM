
import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from "./App.jsx";

/**
 * Import the stylesheet for the plugin.
 */
import "./style/main.scss";
import "rsuite/dist/rsuite.min.css";

const rootElement = document.getElementById('crm-app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
