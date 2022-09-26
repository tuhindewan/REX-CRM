import React from 'react';
import { createRoot } from 'react-dom/client';

import App2 from "./App2.jsx";

/**
 * Import the stylesheet for the plugin.
 */
import "rsuite/dist/rsuite.min.css";
import "./scss/style.scss";
import "./style/main.scss";


const rootElement = document.getElementById('crm-app');
const root = createRoot(rootElement);

root.render( <App2 /> );

