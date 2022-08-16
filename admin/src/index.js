import { render } from '@wordpress/element';
import App from "./App.jsx";

/**
 * Import the stylesheet for the plugin.
 */
import './style/main.scss';
import './components/component-css/Node.css';
import './components/component-css/Sidebar.css';
import './components/Dashboard.css';

// Render the App component into the DOM
render(<App />, document.getElementById('crm-app'));